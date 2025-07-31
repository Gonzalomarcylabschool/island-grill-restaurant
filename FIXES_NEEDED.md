# Island Grill - Required Fixes for PERN Stack Implementation

## 🚨 Critical Issues

### 1. **Project Structure & Configuration**

#### **Missing Server Dependencies**
- **Issue**: Server dependencies are not defined in package.json
- **Fix**: Add server dependencies to root package.json or create separate server package.json
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "knex": "^3.0.1",
    "pg": "^8.11.3"
  }
}
```

#### **Vite Configuration Issues**
- **Issue**: Vite is not configured for PERN stack (no proxy to backend)
- **Fix**: Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true
      }
    }
  }
})
```

#### **Missing Environment Configuration**
- **Issue**: No .env file for database and server configuration
- **Fix**: Create `.env` file in root:
```env
# Database
PG_HOST=localhost
PG_USER=postgres
PG_PASSWORD=your_password
PG_DATABASE=island_grill
PG_PORT=5432

# Server
PORT=4000
NODE_ENV=development
```

### 2. **Database & Backend Issues**

#### **Missing Database Schema**
- **Issue**: Database migrations exist but may not be properly set up
- **Fix**: 
  1. Run `npx knex migrate:latest` to create tables
  2. Verify all tables exist: `orders`, `menu`, `order_menu`, `users`

#### **Incomplete API Routes**
- **Issue**: Server imports routes that don't exist
- **Fix**: Create missing route files:
- `server/routes/users.js`
- `server/routes/menu.js` 
- `server/routes/order_menu.js`

#### **Missing Controllers**
- **Issue**: Only orderController exists
- **Fix**: Create missing controllers:
- `server/controllers/userController.js`
- `server/controllers/menuController.js`

#### **Route Configuration Error**
- **Issue**: Routes have incorrect paths (double `/api`)
- **Fix**: Update `server/routes/orderRoutes.js`:
```javascript
router.post('/', orderController.createOrder);
router.get('/', orderController.getOrders);
```

### 3. **Frontend Issues**

#### **Missing Pages from Product Spec**
- **Issue**: Only Home and Order pages exist
- **Fix**: Create missing pages:
- `frontend/src/pages/Menu.jsx` (dedicated menu page)
- `frontend/src/pages/About.jsx` (restaurant story/staff)
- `frontend/src/pages/Contact.jsx` (location/hours)

#### **Incomplete Routing**
- **Issue**: App.jsx only has 2 routes
- **Fix**: Update `frontend/src/App.jsx`:
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/order" element={<Order />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
</Routes>
```

#### **Missing API Integration**
- **Issue**: Order page uses hardcoded data instead of API calls
- **Fix**: Create API service layer:
- `frontend/src/services/api.js`
- `frontend/src/services/orderService.js`
- `frontend/src/services/menuService.js`

#### **No State Management**
- **Issue**: No global state for cart/orders
- **Fix**: Implement context or state management:
- `frontend/src/contexts/CartContext.js`
- `frontend/src/contexts/AuthContext.js`

### 4. **Product Spec Alignment Issues**

#### **Missing Features from Spec**
- **Issue**: Several must-have features not implemented
- **Fix**: Implement:
1. **Menu Page**: Dedicated page with food images and descriptions
2. **About Page**: Restaurant history, staff, and story
3. **Order Form**: Proper form with pickup time and contact info
4. **Navigation**: Proper navigation between all pages

#### **User Journey Gaps**
- **Issue**: User journey from spec not fully supported
- **Fix**: 
1. Add SEO meta tags for discoverability
2. Implement proper menu filtering
3. Add social media links
4. Create confirmation screens for orders

## 🔧 Implementation Priority

### **Phase 1: Core Infrastructure (High Priority)**
1. Fix package.json dependencies
2. Configure Vite proxy
3. Set up environment variables
4. Create missing API routes and controllers
5. Fix database setup

### **Phase 2: Frontend Pages (High Priority)**
1. Create Menu page
2. Create About page  
3. Create Contact page
4. Update routing in App.jsx
5. Implement proper navigation

### **Phase 3: API Integration (Medium Priority)**
1. Create API service layer
2. Connect frontend to backend
3. Implement proper error handling
4. Add loading states

### **Phase 4: Enhanced Features (Medium Priority)**
1. Add state management
2. Implement cart functionality
3. Add form validation
4. Create confirmation screens

### **Phase 5: Polish & SEO (Low Priority)**
1. Add meta tags
2. Implement social media links
3. Add customer reviews section
4. Optimize for mobile

## 📋 Specific File Changes Needed

### **New Files to Create:**
```
server/
├── routes/
│   ├── users.js
│   ├── menu.js
│   └── order_menu.js
├── controllers/
│   ├── userController.js
│   └── menuController.js
└── .env

frontend/src/
├── pages/
│   ├── Menu.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── services/
│   ├── api.js
│   ├── orderService.js
│   └── menuService.js
└── contexts/
    ├── CartContext.js
    └── AuthContext.js
```

### **Files to Update:**
- `package.json` (add server dependencies)
- `vite.config.js` (add proxy configuration)
- `server/index.js` (fix route imports)
- `frontend/src/App.jsx` (add all routes)
- `server/routes/orderRoutes.js` (fix route paths)

## 🚀 Quick Start Commands

After implementing fixes:

```bash
# Install dependencies
npm install

# Set up database
npx knex migrate:latest

# Start development
npm run dev  # Frontend (Vite)
npm run server  # Backend (Express)
```

## 📝 Notes

- The current implementation has a good foundation but needs significant expansion
- Focus on Phase 1 and 2 first to get a working MVP
- The product spec is well-defined and should guide all development decisions
- Consider using React Router for navigation and Context API for state management
- Ensure all API endpoints match the frontend service calls 