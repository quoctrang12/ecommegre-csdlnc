# Ecommerce Application

A full-stack ecommerce platform built with React (Vite) frontend and Node.js/Express backend.

## Project Structure

```
ecommegre-csdlnc/
├── BE/          # Backend (Node.js/Express)
├── FE/          # Frontend (React/Vite)
└── README.md    # This file
```

## Quick Start

### Prerequisites
- **Node.js** v14 or higher
- **npm** or **yarn**
- **MongoDB** (for backend database)

### 1. Backend Setup

```bash
cd BE
npm install

# Create .env file with required variables
# See BE/README.md for detailed environment setup

npm run dev
```

Backend will run on: `http://localhost:4009`

### 2. Frontend Setup

```bash
cd FE
npm install

# Create .env file with required variables
# See FE/README.md for detailed environment setup

npm run dev
```

Frontend will run on: `http://localhost:4007`

## Full Setup Guide

### Backend (BE)

For complete backend setup instructions, see [BE/README.md](./BE/README.md)

**Quick overview:**
- Install dependencies: `npm install`
- Set environment variables in `.env`
- Start development server: `npm run dev` (port 4009)

### Frontend (FE)

For complete frontend setup instructions, see [FE/README.md](./FE/README.md)

**Quick overview:**
- Install dependencies: `npm install`
- Set environment variables in `.env` (⚠️ NO SPACES around `=` sign)
- Start development server: `npm run dev` (port 4007)

## Environment Files

### Backend (.env)
```
MONGO_URI=your_mongodb_url
PORT=4009
NODE_ENV=development
JWT_SECRET=your_secret_key
```

### Frontend (.env)
```
VITE_BASE_URL=http://localhost:4009/api/
VITE_PAYPAL_CLIENT_ID=your_paypal_id
VITE_GOOGLE_OAUT_ID=your_google_id
VITE_FACEBOOK_AUTH_ID=your_facebook_id
# ... see FE/README.md for all variables
```

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT

### Frontend
- **Library**: React
- **Build Tool**: Vite
- **State Management**: Redux
- **UI Framework**: Material-UI (MUI)
- **HTTP Client**: Axios

## Features

- ✅ User authentication (JWT)
- ✅ Product catalog
- ✅ Shopping cart
- ✅ Order management
- ✅ Payment integration (PayPal)
- ✅ Social login (Google, Facebook)
- ✅ Shipping integration
- ✅ Customer reviews
- ✅ Favorite products
- ✅ Admin dashboard
- ✅ Shipper management

## Development

### Running Both Services Simultaneously

**Option 1: Separate Terminals**
- Terminal 1: `cd BE && npm run dev`
- Terminal 2: `cd FE && npm run dev`

**Option 2: Using a Process Manager**
- Install `concurrently`: `npm install -g concurrently`
- Run: `concurrently "cd BE && npm run dev" "cd FE && npm run dev"`

### API Documentation

The backend API is available at: `http://localhost:4009/api/`

Main endpoints:
- `/brand` - Brand management
- `/category` - Category management
- `/product` - Product catalog
- `/customer` - Customer accounts
- `/order` - Orders
- `/cart` - Shopping cart
- `/dashboard` - Analytics

## Deployment

### Backend
- Deployment configuration in `BE/vercel.json`
- Can be deployed to Vercel, Heroku, or any Node.js hosting

### Frontend
- Build command: `npm run build`
- Output: `dist/` folder
- Can be deployed to Vercel, Netlify, or any static hosting

## Troubleshooting

### Frontend `.env` not loading
- Ensure no spaces around `=` sign
- Restart dev server after changing `.env`
- File must be at FE root, not in src/

### Backend connection errors
- Verify MongoDB is running
- Check `MONGO_URI` in `.env`
- Verify port 4009 is available

### CORS issues
- Ensure backend `VITE_BASE_URL` matches backend URL
- Check backend CORS configuration

## Contributing

1. Create a feature branch
2. Make your changes
3. Test both BE and FE
4. Commit with clear messages
5. Push and create a pull request

## License

This project is part of an academic program.

## Support

For issues or questions, please refer to:
- [BE/README.md](./BE/README.md) - Backend documentation
- [FE/README.md](./FE/README.md) - Frontend documentation
