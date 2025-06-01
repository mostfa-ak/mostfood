# MostFood

**MostFood** is a full-stack food ordering web application built as a personal graduation project by **Mostfa Akermi**. The application provides users with a seamless and responsive experience to explore food items, manage their orders, and interact with a dynamic interface powered by the MERN stack.

## 🚀 Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  
- **Deployment**: Render  
- **Other Tools**: Stripe (for payment integration)

## 🌐 Live Demo

You can try the app live here:  
[https://mostfood-frontend.onrender.com/](https://mostfood-frontend.onrender.com/)


## ✨ Features

- User authentication and secure access.
- Explore various food categories and products.
- Add items to cart and place orders.
- View order history and profile.
- Admin panel to manage food items.
- Responsive design for all screen sizes.

## 🛠️ Installation Guide

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mostfa-ak/mostfood.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd mostfood
    ```

3. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

4. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

5. **Set up environment variables:**  
   Create a `.env` file inside the `backend` folder with the following content:

    ```env
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    ```

6. **Run the project:**

    - Start the backend:

      ```bash
      cd backend
      npm run dev
      ```

    - Start the frontend:

      ```bash
      cd ../frontend
      npm start
      ```

    The app will be running on: [http://localhost:5173](http://localhost:5173)

## 🧪 API Endpoints

- **User Routes**
  - `POST /api/users/login` — Login
  - `POST /api/users/register` — Register

- **Food Routes**
  - `GET /api/food` — Get all food items
  - `POST /api/food` — Add a new food item (admin)

- **Order Routes**
  - `POST /api/orders` — Create new order
  - `GET /api/orders/:id` — Get order by ID

