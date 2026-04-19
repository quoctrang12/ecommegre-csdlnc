# Ecommerce Frontend (FE)

A React + Vite frontend application for the ecommerce platform.

## Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn**

## Installation

1. Navigate to the FE directory:
```bash
cd FE
```

2. Install dependencies:
```bash
npm install
```

## Environment Setup

Create a `.env` file in the FE directory with the following variables:

```
# API Configuration
VITE_BASE_URL=http://localhost:4009/api/

# External APIs
VITE_API_COUNTRY=https://vapi.vnappmob.com/api/
VITE_API_CURRENCY_RATE=https://api.apilayer.com/exchangerates_data/latest?symbols=VND&base=USD
VITE_API_CURRENCY_KEY=your_api_key

# Payment Gateway
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id

# Shipping
VITE_GHN_CURRENT_DISTRICT=1572
VITE_GHN_CURRENT_WARD=550113

# Social Login
VITE_GOOGLE_OAUT_ID=your_google_oauth_id
VITE_GOOGLE_OAUT_SECRET=your_google_oauth_secret
VITE_FACEBOOK_AUTH_ID=your_facebook_auth_id

# Chatbot
VITE_CHATBOT_APP_ID=your_chatbot_app_id
VITE_CHATBOT_API_KEY=your_chatbot_api_key
```

**Important**: All `.env*` files should NOT have spaces around the `=` sign. Example:
```
✅ VITE_BASE_URL=http://localhost:4009/api/
❌ VITE_BASE_URL = http://localhost:4009/api/
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:4007`

### Production Build
```bash
npm run build
```
Creates an optimized build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
FE/
├── src/
│   ├── components/     # Reusable React components
│   │   ├── common/     # Common components (Header, Footer, etc.)
│   │   ├── layouts/    # Layout components
│   │   └── ui/         # UI components
│   ├── screen/         # Full page components
│   │   ├── admin/      # Admin pages
│   │   ├── client/     # Customer pages
│   │   └── shipper/    # Shipper pages
│   ├── redux/          # Redux store and slices
│   ├── utils/          # Utility functions and API clients
│   │   ├── axiosPublic.jsx       # Public API client
│   │   ├── axiosPrivate.jsx      # Private API client
│   │   └── axiosClientPrivate.jsx # Client private API client
│   ├── constants/      # Constants (menu, breadcrumbs, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── assets/         # Images, styles, videos
│   ├── App.jsx         # Main App component
│   ├── index.jsx       # React entry point
│   └── index.html      # HTML template
├── public/             # Static files
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## Key Features

- **React Router**: Multi-page navigation
- **Redux**: State management
- **Vite**: Fast build tool and dev server
- **Material-UI (MUI)**: UI component library
- **Axios**: HTTP client
- **Social Login**: Google, Facebook authentication
- **Payment**: PayPal integration
- **Shipping**: Integration with shipping services

## API Clients

The application uses three different Axios instances:

1. **axiosPublic**: For unauthenticated requests
2. **axiosPrivate**: For authenticated employee requests
3. **axiosClientPrivate**: For authenticated customer requests

## Troubleshooting

### `.env` variables not loading
- Ensure `.env` file is in the FE root directory (not in src/)
- Restart the dev server after changing `.env` file
- Check for spaces around `=` sign (should have none)

### Port 4007 already in use
Edit `vite.config.js` and change the port:
```javascript
server: {
  port: 3000  // Change to any available port
}
```

### Module not found
Run `npm install` again to ensure all dependencies are installed.

## Development Tips

- Use Redux DevTools extension for debugging state
- Check console for Vite HMR (Hot Module Replacement) issues
- Use browser DevTools to inspect API calls

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist` folder, ready for deployment.

## Related Backend

The frontend connects to the backend API. Ensure the backend is running on `http://localhost:4009` or update `VITE_BASE_URL` accordingly.

See [BE/README.md](../BE/README.md) for backend setup instructions.
