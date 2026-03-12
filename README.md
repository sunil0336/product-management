# Product Management Dashboard

## Project Overview

The **Product Management Dashboard** is a React-based web application that allows users to manage products efficiently.
The dashboard provides features to **view, add, edit, delete, search, and filter products** in a clean and responsive interface.

This project demonstrates practical frontend development using **React functional components, hooks, API integration, and modern UI design**.

---

## Live Demo

You can view the live application here:

**Live URL:**
https://product-management-sage-five.vercel.app/

---

## Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* Axios / Fetch API
* React Hooks (useState, useEffect)
* React Hot Toast

---

## Features Implemented

### Core Features

* Display product list from API
* Add new product
* Edit existing product
* Delete product
* Product search functionality
* Category filtering
* Pagination (10 products per page)
* Stock status display
* Loading state handling
* Error handling

### UI & UX Enhancements

* Responsive layout using Tailwind CSS
* Skeleton loaders while fetching products
* Toast notifications for user actions
* Confirmation before deleting products

### Optional Enhancements Implemented

* Debounced search for better performance
* Custom React hooks for state management
* Optimistic UI updates
* Reusable component structure

---

## Folder Structure

```
src
├── components
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   ├── SearchBar.jsx
│   ├── Pagination.jsx
│   └── ProductSkeleton.jsx
│
├── pages
│   └── Dashboard.jsx
│
├── hooks
│   ├── useProducts.js
│   └── useDebounce.js
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/product-dashboard.git
```

### 2. Navigate to project directory

```
cd product-dashboard
```

### 3. Install dependencies

```
npm install
```

### 4. Run development server

```
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

## API Used

Product data is fetched from the public API:

```
https://fakestoreapi.com/products
```

---

## Screenshots

### Dashboard

(Add screenshot here)

### Add Product Form

(Add screenshot here)

### Search & Filter

(Add screenshot here)

---

## Author

Sunil Rathod
MSc Computer Science – Fergusson College Pune
