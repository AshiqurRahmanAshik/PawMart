# WarmPaws – Pet Care in Winter 🐾❄️

## Project Overview

**WarmPaws** is a cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season. This single-page application (SPA) allows users to explore local pet care services, winter pet clothing, grooming options, and expert tips — all in a friendly and approachable interface.

The project focuses on:

- Minimalist and modern design
- Full responsiveness on mobile, tablet, and desktop
- Seamless SPA behavior with persistent Navbar and Footer
- Secure Firebase authentication
- Subtle animations and interactive components

---

## Key Features

### 1. Navbar & Footer

- Responsive Navbar with:
  - Logo and navigation links (Home, Services, My Profile)
  - Login/Register buttons (when logged out)
  - User avatar with hover displaying the username (when logged in)
  - Logout functionality
- Footer with contact information, social links, and privacy policy

### 2. Home Page

- **Hero Slider:** Winter-themed pets slider using Swiper.js/DaisyUI
- **Popular Winter Care Services:**  
  Cards displaying service image, name, rating, price, and "View Details" button (data from JSON)
- **Winter Care Tips:** Static or JSON-generated winter pet care tips
- **Meet Our Expert Vets:** Section showcasing 3–4 expert profiles

### 3. Service Details Page (Protected Route)

- Accessible only after login
- Shows complete details of each service from JSON
- Includes **“Book Service”** form (Name, Email, Book Now button) with success toast notification

### 4. Authentication

- **Login Page:**
  - Email, Password, Forget Password link
  - Google Social Login
  - Success/error notifications using react-hot-toast
- **Signup Page:**
  - Name, Email, Photo-URL, Password fields
  - Password validation (uppercase, lowercase, minimum 6 characters)
  - Google Social Login
- **Forgot Password:**
  - Redirects to Gmail after submitting the reset request
- Password toggle functionality using eye icon

### 5. My Profile Page

- Displays user info (Name, Email, Profile Image)
- **Update Profile Button:** Functional in the challenge section (updates Name & Image)

---

## Technologies & NPM Packages Used 🛠️

| Icon | Technology / Package   | Purpose                                                   |
| ---- | ---------------------- | --------------------------------------------------------- |
| ⚛️   | React & React Router   | Frontend framework and SPA routing                        |
| 💫   | AOS                    | Animate on scroll library for smooth scroll animations    |
| ✨   | Animate.css            | CSS library for subtle animations                         |
| 🌀   | Swiper.js              | Interactive sliders/carousels                             |
| 🔔   | react-hot-toast        | Toast notifications for success and error messages        |
| 🔒   | Firebase               | Authentication and secure environment variable management |
| 🎨   | DaisyUI & Tailwind CSS | UI components and styling framework                       |

---
