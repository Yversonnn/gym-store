# Gym Store E-Commerce Website

## Project Background

Gym Store is a modern e-commerce platform designed specifically for fitness enthusiasts and athletes. This website serves as a comprehensive online store for gym supplements and nutrition products, including protein powders, mass gainers, creatine, and pre-workout supplements.

### Startup Vision

The vision behind Gym Store is to create a user-friendly, accessible platform that makes purchasing high-quality gym supplements simple and convenient. With the growing fitness industry and increased awareness of sports nutrition, there's a significant demand for a reliable online store that offers:

- **Quality Products**: Curated selection of top-tier gym supplements
- **Easy Navigation**: Intuitive product browsing and cart management
- **Responsive Design**: Seamless experience across all devices
- **Fast Performance**: Built with modern React architecture for optimal speed

### Target Audience

- Fitness enthusiasts looking for quality supplements
- Athletes seeking performance-enhancing nutrition
- Gym-goers wanting convenient online shopping
- Health-conscious individuals prioritizing their nutrition

## Features

- **Product Catalog**: Browse a wide selection of gym supplements with detailed information
- **Product Details**: View comprehensive product descriptions, ratings, and pricing
- **Shopping Cart**: Add products to cart and manage quantities
- **Responsive Design**: Mobile-first approach with Bootstrap styling
- **Modern UI**: Clean interface with background imagery for enhanced user experience
- **React Router**: Smooth navigation between pages

## Technology Stack

- **React 19**: Latest version for optimal performance
- **React Router**: Client-side routing
- **React Bootstrap**: Responsive UI components
- **Context API**: State management for shopping cart
- **CSS3**: Custom styling with background images

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Run Locally

```powershell
cd gym-store\frontend
npm install
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```powershell
npm run build
```

This creates an optimized production build in the `build/` folder.

### Docker Deployment

Serve the production build with Docker:

```powershell
docker build -t gym-store .
docker run -p 8080:80 gym-store
```

Access the application at `http://localhost:8080`

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── images/          # Product images
├── src/
│   ├── components/      # Reusable components (Header, Footer, etc.)
│   ├── pages/          # Page components (Home, Products, Cart)
│   ├── store/          # Context API for state management
│   ├── data/           # Product data
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## Available Products

- **Whey Protein**: Premium quality protein for muscle recovery
- **Mass Gainer**: High-calorie formula for muscle mass
- **Creatine**: Boost strength and performance
- **Pre-Workout**: Energy and focus enhancement

## Future Enhancements

- User authentication and accounts
- Payment gateway integration
- Product reviews and ratings system
- Wishlist functionality
- Order history and tracking
- Advanced filtering and search
- Admin dashboard for inventory management

## Contributing

This project is part of a web development course assignment. Feedback and suggestions are welcome!

## License

This project is created for educational purposes.
