# DeliveryPro

DeliveryPro is a beginner-friendly Node.js delivery management system. It covers customer orders, rider assignment, delivery lifecycle tracking, proof/OTP support, payments, reports, live Socket.IO events and a responsive browser interface.

## Start locally

1. Install [Node.js](https://nodejs.org), then open this folder in VS Code.
2. Copy `.env.example` to `.env` and replace `JWT_SECRET` with a strong value.
3. In the terminal run `npm install` and then `npm start`.
4. Open `http://localhost:3000`.

For automatic restarts while coding, run `npm run dev`.

The SQLite database is created and seeded automatically in `data/deliverypro.db` on first start. Demo accounts: `admin@deliverypro.com` / `Admin123!`, `dispatcher@deliverypro.com` / `Dispatcher123!`, `rider@deliverypro.com` / `Rider123!`, and `customer@deliverypro.com` / `Customer123!`.

## What is where

- `server.js` = main Express API, authentication, role checks, Socket.IO and uploads.
- `config/database.js` = SQLite promise helpers.
- `database/schema.sql` = database structure; `database/seed.js` = safe demo-data seed.
- `public/` = HTML, CSS and plain browser JavaScript.

Roman Urdu: `server.js` main Node.js server hai. `schema.sql` tables banata hai. `seed.js` demo accounts aur sample delivery banata hai. `public/js/tracking.js` customer ko live tracking timeline dikhata hai. Rider location `POST /api/riders/location` se order Socket.IO room mein broadcast hoti hai.

## Key API routes

Authentication: `/api/auth/register`, `/api/auth/login`, `/api/auth/me`. Orders: `/api/orders`, `/api/orders/:id/status`, `/api/orders/:id/assign`. Public tracking: `/api/tracking/:trackingNumber`. Pricing: `/api/pricing/estimate`. Reports accept `?format=csv`.

Use bearer tokens from login for protected endpoints. Default browser accounts are automatically routed to the shared dashboard; permissions continue to be enforced by the API.
