# QRCRAFT

🎨 **AI-Powered QR Code Studio** - Generate, customize, scan, and track beautiful QR codes with AI superpowers.

## ✨ Features

- 🎯 **16 Content Types**: URL, WhatsApp, Instagram, WiFi, vCard, Email, SMS, and more
- 🤖 **AI Assistant**: Chat-based QR generation with conversation memory
- 🎨 **Smart Design**: AI-powered color and template suggestions
- 📊 **Analytics Dashboard**: Track scans with detailed insights
- 🔍 **QR Scanner**: Built-in camera and image-based QR scanning
- 🎭 **Custom Branding**: Templates, colors, gradients, and logo embedding
- 📦 **Batch Generation**: CSV to multiple QRs
- 🌐 **Vision OCR**: AI image-to-QR extraction

## 🚀 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **AI**: Groq (GPT-OSS models), OpenRouter (fallback)
- **Database**: Prisma + SQLite
- **UI Components**: Radix UI, shadcn/ui
- **QR Generation**: qrcode, qrcode-generator

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Setup database
npm run db:generate
npm run db:push

# Start development server
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
GROQ_API_KEY="your_groq_api_key"
OPENROUTER_API_KEY="your_openrouter_api_key"
```

## 📝 License

MIT

---

Built with ❤️ by [Yashraj Ghemud](https://github.com/yashraj-ghemud)
