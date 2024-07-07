# Zesty Admin Panel
The Zesty admin panel is a comprehensive web-based interface designed for administrators to manage various aspects of the Zesty food ordering platform. It provides essential features to ensure smooth operation and seamless management of the online food ordering process.

## Key Features:
1) Manage Menu Items:

-> Add Food Items: Administrators can add new food items to the menu. This includes specifying details such as the food item name, description, price, category, and an optional image.

-> Remove Food Items: Existing food items can be removed from the menu when they are no longer available or required. This helps in keeping the menu up-to-date.

-> Edit Food Items: Administrators can update the details of existing food items, such as changing the price, description, or category, and updating the image if needed.

2) Order Management:

-> View Orders: The admin panel provides a detailed view of all the orders placed through the main Zesty website. Each order includes information such as order ID, customer details, ordered items, total amount, and order date/time.

-> Update Order Status: Administrators can update the status of each order as it progresses through different stages:
Food Processing: When the order is being prepared.
Out for Delivery: When the order has been dispatched and is on its way to the customer.

-> Delivered: When the order has been successfully delivered to the customer.

3) User Notifications:

-> The status updates made in the admin panel are reflected in real-time on the customer's order page on the main Zesty website. This keeps customers informed about the current status of their orders, enhancing their experience and satisfaction.

6) Responsive Design:

Ensure that the website is fully responsive, providing an optimal user experience across various devices, including desktops, tablets, and smartphones.

## User Interface
-> Menu Management: A dedicated section for managing food items where administrators can easily add, edit, or remove items with a simple and intuitive form-based interface and all the changes made here will be visible in the main Zesty Website.

-> Orders Section: A comprehensive list of all orders with filtering options to view orders based on their status (e.g., pending, processing, out for delivery, delivered).

-> List of Items: It gives a complete list of menu items in the website.

## Technologies used:

Frontend: 
1) React:

-> Component-Based Architecture: React's component-based structure allows for building reusable UI components. This ensures the code is modular, maintainable, and scalable.

-> State Management: React's use of hooks and context APIs simplifies state management across the application. This allows for efficient handling of dynamic data, such as order statuses and menu updates.

-> Virtual DOM: React's virtual DOM improves performance by minimizing direct manipulation of the actual DOM, leading to faster UI updates.

-> React Router: This is used for navigating between different views of the admin panel, such as the dashboard, menu management, and order details.

2) CSS-in-JS: Libraries like styled-components or emotion may be used for styling components, providing a seamless way to manage styles scoped to individual components.

3) Backend:   Custom API Server-

-> Node.js and Express: The backend is built using Node.js with Express, providing a lightweight and efficient server for handling API requests.
-> RESTful API: The API follows REST principles, making it easy to interact with from the React frontend. This includes endpoints for managing food items (/api/food), handling orders (/api/orders), and updating order status.

4) Database:
MongoDB : The database stores data for menu items, orders, and users. MongoDB, being a NoSQL database, is flexible and scalable, making it suitable for handling dynamic data structures.

5) Authentication and Authorization:
JWT (JSON Web Tokens): JWT is used for securing API endpoints, ensuring that only authenticated users can access or modify data.

-> Deployment: Render.com
Render.com:
Hosting the API Server: The custom API server is deployed on Render.com, a platform that simplifies deployment and scaling of web applications. Render.com provides automatic HTTPS, automatic scaling, and continuous deployment from a connected Git repository.
Static Site Hosting: If the React app is built as a static site, it can also be hosted on Render.com, providing fast and reliable access to the admin panel.