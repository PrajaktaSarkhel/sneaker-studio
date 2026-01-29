# 🎨 Sneaker Studio - Product Customizer

A modern, interactive web application for customizing and previewing sneakers in real-time.

## What is Product Customization? (For Kids!)

Imagine coloring your favorite sneakers with any color you want, adding your name, and choosing if they're shiny or soft! That's what this app does - it lets you design your dream shoes on the computer and see exactly how they'll look!

## 🚀 Features

- **Custom Authentication** - Secure login/signup with JWT
- **Real-time Preview** - See your design changes instantly
- **Design Gallery** - Save, edit, and manage your creations
- **AI Suggestions** - Get design ideas powered by AI
- **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

- Next.js 14 + TypeScript
- Zustand (State Management)
- TanStack Query (Data Fetching)
- Shadcn UI + Tailwind CSS
- Framer Motion (Animations)
- JWT Authentication

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project
cd sneaker-studio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔐 Test Credentials

```
Email: test@example.com
Password: test@123
```

## 📁 Project Structure

```
sneaker-studio/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── customizer/
│   │   └── gallery/
│   ├── api/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── auth/
│   ├── customizer/
│   └── gallery/
├── lib/
│   ├── stores/
│   ├── utils/
│   └── hooks/
└── public/
    └── images/
```

## 🎯 Key Features Implemented

### 1. Authentication
- Custom login/signup forms
- JWT-based sessions
- Protected routes
- Form validation

### 2. Product Customization
- Multiple sneaker models
- Color pickers for different parts
- Material selection
- Text engraving
- Real-time preview

### 3. Design Gallery
- CRUD operations
- Search and filter
- Grid layout
- Infinite scroll

### 4. AI Suggestions (Bonus)
- Natural language processing
- Auto-apply customizations
- Design recommendations

## 🚀 Deployment

Deployed on Vercel: [Your Live URL]

## 📝 License

MIT License