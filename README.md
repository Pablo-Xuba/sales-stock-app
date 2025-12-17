# 📱 Sales & Stock Management App

A mobile app for small businesses in Zimbabwe to track sales, manage stock, and monitor profit in real-time.

## 🎯 Purpose

Answer these questions instantly:
- *"Ndakaita marii nhasi?"* (How much did I make today?)
- *"Profit yakadii?"* (What's my profit?)
- *"Stock yasara yakadii?"* (How much stock is left?)

## ✨ Features

### Current Features (MVP)
- ✅ **Authentication System** - Login & Sign Up with validation
- ✅ **Today Dashboard** - View daily revenue, profit, and sales count
- ✅ **Product Management** - Add products with cost/selling prices
- ✅ **Stock Tracking** - Monitor inventory levels
- ✅ **Sales Recording** - Quick sale entry (coming soon)
- ✅ **Profit Calculator** - Auto-calculate profit margins
- ✅ **Clean UI** - Professional, touch-friendly interface

### Coming Soon
- 🔄 Firebase Authentication & Firestore integration
- 🔄 Record sales in 2 taps
- 🔄 WhatsApp daily summary sharing
- 🔄 Low stock alerts
- 🔄 Sales history & analytics

## 🛠️ Tech Stack

- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: Expo Router
- **UI**: React Native components with custom styling
- **Backend** (Coming): Firebase (Authentication + Firestore)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Expo CLI
- Expo Go app (for testing on phone)

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/sales-stock-app.git
cd sales-stock-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Run on your device
- Scan the QR code with Expo Go (Android/iOS)
- Press `a` for Android emulator
- Press `i` for iOS simulator
- Press `w` for web browser

## 📱 Screens

### Authentication
- **Welcome Screen** - Landing page with app features
- **Login Screen** - Email/password authentication
- **Sign Up Screen** - Create new business account

### Main App (Tabs)
- **Today** - Daily revenue, profit, and sales summary
- **Sales** - Record new sales quickly
- **Stock** - View and manage product inventory

### Additional Screens
- **Add Product** - Add new products with pricing

## 📂 Project Structure

```
sales-stock-app/
├── app/
│   ├── (tabs)/          # Tab navigation screens
│   │   ├── index.tsx    # Today/Dashboard
│   │   ├── sales.tsx    # Sales recording
│   │   └── stock.tsx    # Stock management
│   ├── index.tsx        # Welcome screen
│   ├── login.tsx        # Login screen
│   ├── signup.tsx       # Sign up screen
│   ├── add-product.tsx  # Add product modal
│   └── _layout.tsx      # Root layout
├── components/          # Reusable components
├── constants/           # App constants & theme
└── assets/             # Images & resources
```

## 🎨 Design Principles

- **Simple**: 2-tap maximum for common actions
- **Fast**: Optimized for slow networks
- **Offline-first**: Works without internet
- **Touch-friendly**: Large buttons, clear labels
- **Local context**: Built for Zimbabwe businesses

## 🔐 Environment Setup

Create a `.env` file (when Firebase is integrated):
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
```

## 🧪 Testing

Currently using mock authentication. Firebase integration coming next.

## 📝 Development Roadmap

### Phase 1 (Days 1-3) ✅ COMPLETE
- [x] Project setup
- [x] Navigation structure
- [x] Basic UI screens
- [x] Add Product functionality

### Phase 2 (Days 4-6) 🚧 IN PROGRESS
- [ ] Firebase Authentication
- [ ] Firestore integration
- [ ] Save products to database
- [ ] Load products from database

### Phase 3 (Days 7-9)
- [ ] Sales recording logic
- [ ] Stock deduction on sale
- [ ] Daily summary calculation

### Phase 4 (Days 10-12)
- [ ] WhatsApp sharing
- [ ] Offline sync
- [ ] User settings

### Phase 5 (Days 13-14)
- [ ] UI polish
- [ ] Bug fixes
- [ ] Real shop testing

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

## 📄 License

MIT License - Feel free to use for your own business!

## 🇿🇼 Made for Zimbabwe

Built with love for small businesses in Zimbabwe. From tuckshops to salons to phone repair shops - this is for you!

---

**Version**: 0.1.0 (MVP)  
**Status**: Active Development  
**Target**: Android (Primary), iOS (Secondary)
