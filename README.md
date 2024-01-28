# Computer Components Store

Welcome to the Computer Components Store, a web application built with Next.js, React, Typescript, NextAuth, MongoDB (with Prisma), Stripe, and Tailwind. This project is a fully functional online store for computer components, offering a seamless shopping experience with a range of features.

## Table of Contents
- [Introduction](#Introduction)
- [Features](#Feature)
- [Technologies Used](#Technologies-Used)
- [Getting Started](#Getting-Started)
- [Authentication](#Authentication)
- [Shopping Experience](#Shopping-Experience)
- [Order and Payment](#Order-and-Payment)
- [Support](#Support)
- [Responsive Design](#Responsive-Design)

## Introduction
The Computer Components Store is a Next.js application designed to showcase and sell a variety of computer components. The project highlights the store's key features, product listings, and an aesthetically pleasing design to enhance the user experience.

## Features
- **Homepage:** Learn more about the store and its standout features.
- **Product Listings:** Explore a comprehensive list of computer components available for purchase.
- **Authentication:** Create an account, sign in, or use Google/GitHub accounts for quick access.
- **Sorting and Filtering:** Easily find products with various sorting and filtering options.
- **Wishlist and Cart:** Save desired items for later or add them to the shopping cart.
- **Order and Payment:** Securely pay for your order using Stripe and view your order history.
- **Support:** Contact customer support with specific topics and details about any issues you encounter.

## Technologies Used
- **Next.js:** Framework for building React applications with server-side rendering and routing.
- **React:** JavaScript library for building user interfaces.
- **Typescript:** Superset of JavaScript that adds static types.
- **NextAuth:** Authentication library for Next.js applications.
- **MongoDB with Prisma:**  Database and database access layer for efficient data management.
Stripe: Payment processing platform for secure online transactions.
- **Tailwind:** Utility-first CSS framework for building stylish and responsive designs.

## Getting Started
To run the project locally, follow these steps:

1. **Clone the repository:** Clone this repository to your computer.
   ```bash
   git clone https://github.com/Sergey325/nextjs-ecommerce.git

2. **Navigate to the project directory:**
   ```bash
   cd nextjs-ecommerce

3. **Install dependencies::**
   ```bash
   npm install

4. **Set up environment variables:** You need to create .env file in the project root directory. Below are the necessary environment variables: 
    ```bash
    DATABASE_URL="The connection URL for your MongoDB database. It specifies the location and authentication details for the database server."
    NEXTAUTH_SECRET="A secret key used by NextAuth for signing and encrypting tokens. It enhances the security of user authentication."
    GITHUB_ID="The client ID for authenticating with GitHub."
    GITHUB_SECRET="The client secret associated with the GitHub client ID."
    GOOGLE_CLIENT_ID="The client ID for authenticating with Google."
    GOOGLE_CLIENT_SECRET="The client secret associated with the Google client ID."
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="The Cloudinary cloud name, used for media asset management and delivery."
    STRIPE_API_KEY="The secret API key for interacting with the Stripe payment platform."
    STRIPE_WEBHOOK_SECRET="The secret key for verifying Stripe webhook events."
    NEXT_AUTH_URL="The base URL of your Next.js application. It is used by NextAuth to construct callback URLs and other authentication-related URLs. Adjust it based on your environment (e.g., http://localhost:3000 for local development)."
    ```
   Make sure to add the `.env` file to the `.gitignore` list to avoid exposing your secret keys.

5. **Run the development server:**
   ```bash
   npm run dev

After completing these steps, your application will be accessible at http://localhost:3000/.

## Authentication
The application supports user authentication through traditional email/password credentials or by using Google and GitHub accounts.

## Shopping Experience
Explore the store's diverse product listings with advanced sorting and filtering options. Add items to your wishlist or shopping cart for a personalized shopping experience.

## Order and Payment
Complete your purchase securely using the integrated Stripe payment system. Once paid, your order history will be accessible under the "Orders" tab.

## Support
Need assistance? Contact customer support by providing a topic, details about the issue, and your email. Your inquiry will be sent to the developer's email.

## Responsive Design
The site is fully responsive, ensuring a seamless experience across various devices and screen sizes, thanks to the use of Tailwind CSS.


**You can check out the deployed version of this project [here](https://nextjs-ecommerce-inky-eight.vercel.app).**
