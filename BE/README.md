# Ecommerce Backend (BE)

A Node.js/Express backend application for the ecommerce platform.

## Prerequisites

- **Node.js** v24.x (or higher)
- **npm** v10.0.0 or higher
- **MongoDB** (if running locally)

## Installation

1. Navigate to the BE directory:
```bash
cd BE
```

2. Install dependencies:
```bash
npm install
```

## Environment Setup

Create a `.env` file in the BE directory with the following variables:
```
# Database
MONGO_URI=your_mongodb_connection_string

# Server
PORT=4009
NODE_ENV=development

# JWT
JWT_SECRET=your_jwt_secret_key

# Email (if needed)
EMAIL_USER=your_email
EMAIL_PASSWORD=your_password

# Other services (if applicable)
EXTERNAL_API_KEY=your_api_key
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The server will start on `http://localhost:4009`

### Production Mode
```bash
npm start
```

## API Endpoints

- Base URL: `http://localhost:4009/api/`
- Available routes:
  - `/api/brand` - Brand management
  - `/api/category` - Category management
  - `/api/product` - Product management
  - `/api/customer` - Customer management
  - `/api/order` - Order management
  - `/api/cart` - Shopping cart
  - `/api/favorite` - Favorites
  - `/api/dashboard` - Dashboard/Analytics

## Project Structure

```
BE/
├── src/
│   ├── common/         # Constants and error responses
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Express middlewares
│   ├── models/         # Database schemas
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
├── app.js              # Express app setup
├── index.js            # Server entry point
└── package.json        # Dependencies
```

## Troubleshooting

- **Connection Error**: Ensure MongoDB is running
- **Port Already in Use**: Change the PORT in `.env` file
- **Module Not Found**: Run `npm install` again

## Deployment

For Vercel deployment, see `vercel.json` configuration.

