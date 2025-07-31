# Island Grill - Restaurant Website Product Specification

## Overview

**What:** This project will be a web application that serves as the digital landing page for my grandfather's restaurant. Visitors can explore the restaurant's story, see its menu offerings, meet the staff, and place an order for pickup. This website will combine storytelling with interactivity to create a welcoming experience that reflects the culture and personality of the restaurant.

## User Personas

| Persona | Goals | Motivators | Challenges | Info Sources |
|---------|-------|------------|------------|--------------|
| **John** (24, Male, Tech-savvy, $60K/yr, Master's Degree) | Find a new place to eat that fits his tastes | Hunger, exploring new food spots | Overwhelmed by too many choices | Google, Yelp |
| **Sarah** (45, Female, Less tech-savvy, $80K/yr, Bachelor's Degree) | Take the family somewhere new for dinner | Wants a reliable and welcoming experience | Not sure what's around, not a heavy internet user | Word of mouth |
| **Jason** (20, Male, Very tech-savvy, $80K/yr, HS Diploma) | Get a quick and consistent bite after work | Speed, price, taste | Doesn't know what's on the menu | Instagram, Maps, TikTok |

## User Journey Map

### 🗺️ User Journey Map – "John" the Food Explorer

| Stage | User Action | User Thought/Feeling | Opportunity/Feature |
|-------|-------------|---------------------|-------------------|
| **1. Discover** | John is hungry and opens Google to search for "best Caribbean food near me." | "I want something new but legit — nothing corporate." | - SEO-friendly page title and meta description<br>- Google Business link with website URL |
| **2. Explore** | He clicks your website link. The homepage loads with high-quality visuals and a brief intro. | "This looks dope — feels like a real family spot." | - Eye-catching landing page<br>- Tagline/story snippet to hook the user |
| **3. Check Menu** | He clicks into the menu page to see what food is offered. | "Jerk chicken? Plantains? Let's go!" | - Clean, readable menu layout<br>- Food pics + descriptions<br>- Optional filter (e.g. meat, vegetarian) |
| **4. Learn More** | Curious about the story, he visits the About page. | "Oh this has history — that's fire." | - Family story or timeline<br>- Photos of the space and people |
| **5. Order** | He heads to the Order page and submits a form for pickup. | "Hope this is easy. I'm starving." | - Simple, intuitive order form<br>- Confirmation message or screen |
| **6. Share** | After eating, he posts a photo on Instagram and tags the restaurant. | "Y'all need to try this place." | - Optional: social links or embedded feed<br>- Consistent branding for easy recognition |

## Product Requirements

### ✅ Must-Haves
- As a user, I can view all the available foods served at the restaurant.
- As a user, I can learn about the restaurant's history, location, and dining experience.
- As a user, I can get to know the people who work at the restaurant.
- As a user, I can place an order using a form.

### 💡 Nice-to-Haves
- As a user, I can view the restaurant's social media links.
- As a user, I can read customer reviews or ratings.
- As a user, I can take a virtual tour (via image gallery or video).

## Technical Requirements & Feature Descriptions

| Feature | Description |
|---------|-------------|
| **🏠 Landing Page** | Includes buttons or nav links that route to Menu, About, and Order pages. |
| **🍽️ Menu Page** | Displays images and descriptions of the food offerings. |
| **👨‍🍳 About Page** | Highlights the restaurant's story, decor, and team. |
| **🧾 Order Page** | Contains a form where users can input food selections, pickup time, and contact info. No backend needed for MVP (submission may show confirmation message only). |

## Deployment Plan

This project can and should be deployed as a static web app using a service like GitHub Pages, Netlify, or Vercel.

## Next Steps

| Task | Priority | Who | Notes |
|------|----------|-----|-------|
| Refine User Journey Map | High | Caleb | Can use a tool like LucidChart, Miro, or Google Drawings |
| Finish basic wireframes (mobile + desktop) | High | Caleb | We've done this before — start with layout blocks for each page |
| Build layout with React or vanilla HTML/CSS | Medium | Caleb | Start with one page at a time |
| Add interactivity (page routing + form) | Medium | Caleb | React Router if using React |
| Prep for deployment | Medium | Caleb + Instructor | Pick a platform and deploy MVP | 