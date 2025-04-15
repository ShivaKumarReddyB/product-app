# ProductApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Project Overview

ProductApp is an Angular-based application designed to display and manage a list of products. It demonstrates key Angular concepts such as components, data binding, services, routing, and navigation.

### Features

- Displays a list of products with details such as name, price, and description.
- Allows users to view detailed information about a specific product.
- Implements routing for navigation between product list and product details.
- Uses a service to fetch product data (mocked or hardcoded).

## Project Structure

The project follows Angular's best practices for folder structure:

```
product-app/
├── src/                  # Application source code
│   ├── index.html        # Main HTML file
│   ├── main.ts           # Application entry point
│   ├── styles.css        # Global styles
│   ├── app/              # Application modules and components
│   │   ├── app-routing.module.ts  # Application routing module
│   │   ├── app.component.*        # Root component files
│   │   ├── core/                  # Core services
│   │   │   └── product.service.ts # Service for product data
│   │   ├── model/                 # Application models
│   │   │   └── product.ts         # Product model definition
│   │   ├── product-list/          # Product list component
│   │   ├── shared/                # Shared components
│   │   │   ├── product-card/      # Product card component
│   │   │   └── product-detail/    # Product detail component
│   └── assets/                    # Static assets
│       └── productdata.json       # Mock product data
```

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Angular CLI](https://angular.io/cli) (v15 or later)

## Setup and Run Instructions

1. **Clone the Repository**

   ```bash
   git clone url
   cd product-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   ng serve
   ```

4. **Access the Application**
   Open your browser and navigate to `http://localhost:4200`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
