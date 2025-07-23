require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./db/knex');

db.migrate
  .latest()
  .then(() => console.log('✅ Migrations complete'))
  .catch((err) => {
    console.error('❌ Migration failed', err);
    process.exit(1);
  });

app.set('trust proxy', 1);

// --- Middleware ---
const handleCookieSessions = require('./middleware/handleCookieSessions');
const checkAuthentication = require('./middleware/authMiddleware');
const logRoutes = require('./middleware/logRoutes');
const logErrors = require('./middleware/logErrors');

// --- Controllers ---
const authControllers = require('./controllers/authControllers');
const userControllers = require('./controllers/userControllers');

// --- Routes ---


// --- Enable CORS ---
app.use(
  cors({
    origin: 'https://patch2.onrender.com', // your frontend deployment URL
    credentials: true,
  })
);

// --- Core middleware ---
app.use(handleCookieSessions);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRoutes);

// --- Serve static files ---
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// --- Auth routes (public) ---
app.post('/api/auth/register', authControllers.registerUser);
app.post('/api/auth/login', authControllers.loginUser);
app.get('/api/auth/me', authControllers.showMe);
app.delete('/api/auth/logout', authControllers.logoutUser);

// --- Debug middleware to test route access ---
app.use(
  '/api/symptoms',
  (req, res, next) => {
    console.log('📥 /api/symptoms hit');
    next();
  },
  checkAuthentication,
  symptomRoutes
);

app.use();



// --- Debug session route ---
app.get('/api/debug-session', (req, res) => {
  console.log('🧪 Session:', req.session);
  res.json(req.session || {});
});

// --- Error handling ---
app.use(logErrors);

// --- Launch server ---
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});