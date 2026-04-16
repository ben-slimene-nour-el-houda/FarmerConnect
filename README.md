# 🌾 AgriWie - The Future of Agricultural Commerce

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

AgriWie is a premium, state-of-the-art agricultural marketplace designed to bridge the gap between farmers, consumers, and suppliers. By leveraging modern technology, AgriWie empowers local producers to reach their community directly while providing consumers with the freshest products and suppliers with a robust platform for agricultural materials.

---

## ✨ Key Features

### 🛒 Dynamic Marketplace
Explore a beautifully designed product catalog with high-quality images, advanced filtering, and real-time inventory tracking. Support local farmers and find everything from fresh organic tomatoes to premium olive oil.

### 📊 Role-Based Dashboards
Unique experiences for every user:
- **Customers**: Track orders, manage favorites, and view delivery statuses in a clean, intuitive interface.
- **Suppliers**: Comprehensive sales overview, inventory management, and financial insights with built-in growth tracking.

### 🛡️ Secure Authentication
A streamlined, secure authentication flow powered by Firebase. Role-based access control ensures that sensitive business data and personal orders remain private and secure.

### 💎 Premium Aesthetics
Built with a "Design-First" philosophy featuring:
- **Glassmorphism UI**: High-end blur effects and semi-transparent layers.
- **Micro-Animations**: Smooth, meaningful transitions powered by Framer Motion.
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop devices.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Backend-as-a-Service**: [Firebase](https://firebase.google.com/) (Auth, Firestore, Storage)
- **Styling**: Vanilla CSS with custom design tokens & [Tailwind Utility Classes](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

```bash
FarmerConnect/
├── src/
│   ├── assets/          # Global styles, high-res assets, design tokens
│   ├── components/      # Reusable UI components (Navbar, Loading states, etc.)
│   ├── context/         # Auth and App state management
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components (Home, Dashboard, Catalog, Auth)
│   ├── services/       # Firebase and API initializations
│   ├── App.jsx          # Main routing and provider setup
│   └── main.jsx         # Application entry point
├── public/              # Static public assets
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite build configuration
```

---

## 🗺️ Roadmap
- [ ] Real-time geolocation for local product discovery.
- [ ] Integrated secure payment gateway (Stripe/Tunisian Dinar support).
- [ ] Supplier messaging system.
- [ ] AI-powered crop price prediction.

---

<div align="center">
  <p>Built with ❤️ for the Agricultural Community</p>
</div>
