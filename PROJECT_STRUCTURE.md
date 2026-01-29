# Sneaker Studio - Complete Project Structure

## 📁 Full Directory Structure

```
sneaker-studio/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx              # Login page
│   │   └── signup/
│   │       └── page.tsx              # Signup page
│   ├── (dashboard)/
│   │   ├── customizer/
│   │   │   └── page.tsx              # Main customizer interface
│   │   └── gallery/
│   │       └── page.tsx              # Design gallery
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts          # Login API
│   │   │   └── signup/
│   │   │       └── route.ts          # Signup API
│   │   ├── designs/
│   │   │   └── route.ts              # CRUD for designs
│   │   └── products/
│   │       └── route.ts              # Get products
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page (redirects)
│   └── providers.tsx                 # React Query provider
├── components/
│   └── ui/
│       ├── button.tsx                # Button component
│       ├── card.tsx                  # Card component
│       ├── input.tsx                 # Input component
│       └── label.tsx                 # Label component
├── lib/
│   ├── stores/
│   │   ├── auth-store.ts            # Auth state management
│   │   └── customizer-store.ts      # Customizer state
│   ├── auth.ts                      # Auth utilities
│   ├── mock-data.ts                 # Mock products/designs
│   └── utils.ts                     # Utility functions
├── public/
│   └── images/                      # Product images (add your own)
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── middleware.ts                    # Route protection
├── next.config.js                   # Next.js config
├── package.json                     # Dependencies
├── postcss.config.js               # PostCSS config
├── README.md                        # Project documentation
├── tailwind.config.ts              # Tailwind config
└── tsconfig.json                   # TypeScript config
```

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd sneaker-studio
npm install
```

### 2. Environment Setup

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and update the JWT secret:
```
JWT_SECRET=your-very-secure-secret-key-here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎨 Key Features Implementation

### 1. Authentication System
- **Location**: `app/(auth)/` and `app/api/auth/`
- **Features**:
  - Email/password validation
  - Password strength indicator
  - JWT-based sessions
  - Secure password hashing with bcrypt
  - Protected routes via middleware

### 2. Product Customizer
- **Location**: `app/(dashboard)/customizer/page.tsx`
- **Features**:
  - Real-time preview updates
  - Color picker for multiple parts
  - Material selection
  - Custom text engraving
  - AI-powered suggestions
  - Save designs

### 3. Design Gallery
- **Location**: `app/(dashboard)/gallery/page.tsx`
- **Features**:
  - Grid layout with animations
  - Search functionality
  - Tag filtering
  - CRUD operations
  - Delete confirmation

### 4. State Management
- **Zustand Stores**:
  - `auth-store.ts`: User authentication state
  - `customizer-store.ts`: Customization state
- **Persistence**: Auth state persists in localStorage

### 5. API Routes
- **GET /api/products**: Fetch all products
- **POST /api/auth/login**: User login
- **POST /api/auth/signup**: User registration
- **GET /api/designs**: Fetch user's designs
- **POST /api/designs**: Create new design
- **PUT /api/designs**: Update design
- **DELETE /api/designs**: Delete design

## 🎯 Test Credentials

```
Email: test@example.com
Password: test@123
```

## 🔧 Customization Guide

### Adding New Products

Edit `lib/mock-data.ts`:

```typescript
{
  id: 'uuid-4',
  name: 'New Sneaker Model',
  baseImage: '/images/new-sneaker.png',
  customizableParts: ['sole', 'upper', 'laces'],
  options: {
    colors: ['#FF0000', '#0000FF'],
    materials: ['leather', 'canvas']
  }
}
```

### Adding Real AI Integration

1. Install AI SDK:
```bash
npm install @google/generative-ai
# or
npm install openai
```

2. Update `app/(dashboard)/customizer/page.tsx` in `handleAiSuggestion`:

```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const prompt = `Given this user request: "${aiPrompt}", suggest sneaker customization with color codes and materials in JSON format.`;
const result = await model.generateContent(prompt);
// Parse and apply suggestions
```

### Styling Customization

Edit `tailwind.config.ts` to change colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(220 100% 50%)", // Your brand color
      }
    }
  }
}
```

## 📱 Responsive Design

The app is fully responsive:
- Mobile: Single column layout
- Tablet: 2-column gallery grid
- Desktop: 3+ column gallery, side-by-side customizer

## 🚢 Deployment to Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `JWT_SECRET`
5. Deploy!

## 🔐 Security Notes

**For Production**:
1. Change JWT_SECRET to a strong random key
2. Use a real database (PostgreSQL, MongoDB)
3. Implement rate limiting
4. Add CSRF protection
5. Enable HTTPS only
6. Add input sanitization
7. Implement proper session management

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
npm install
rm -rf .next
npm run dev
```

### Auth not persisting
- Check browser localStorage
- Clear cookies and retry
- Ensure middleware.ts is configured

### Styles not loading
```bash
npm run build
# Check for Tailwind config errors
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
- [TanStack Query](https://tanstack.com/query)
- [Shadcn UI](https://ui.shadcn.com/)

## 🎓 Learning Path

1. Start with auth pages (`app/(auth)/`)
2. Understand API routes (`app/api/`)
3. Explore state management (`lib/stores/`)
4. Study customizer logic (`app/(dashboard)/customizer/`)
5. Review gallery features (`app/(dashboard)/gallery/`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - Feel free to use for learning and projects!