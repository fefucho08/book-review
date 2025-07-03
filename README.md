# 📚 Book Review App

A modern, responsive book review application built with **React** and **Vite**.  
Search for books and magazines using the Google Books API, bookmark your favorites, and manage your profile—all with a beautiful UI.

---

## 🚀 Features

-   🔍 **Search** for books and magazines by title, author, or publisher
-   ⭐ **Bookmark** your favorite books
-   👤 **User authentication** (register, login, logout)
-   📝 **Profile editing**
-   📖 **Book details** with cover, description, and more
-   💡 **Responsive design** for all devices

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/book-review.git
cd book-review
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the Google Books API Key

-   Create a `.env` file in the root of the project:
    ```
    VITE_GOOGLE_BOOKS_API_KEY=your_google_books_api_key_here
    ```
-   [Get your API key here](https://console.cloud.google.com/apis/credentials).

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## 🧩 Project Structure

```
src/
  components/      # Reusable UI components
  contexts/        # React Context for user/auth
  models/          # Data models (Book, User, etc.)
  pages/           # Main pages (Home, Login, MyBooks, etc.)
  services/        # API calls and helpers
  styles/          # CSS modules
  App.jsx          # Main app component
  Layout.jsx       # App layout (header, footer, etc.)
```

---

## 📦 Built With

-   [React](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [Google Books API](https://developers.google.com/books/docs/v1/using)
-   [Font Awesome](https://fontawesome.com/)

---

## 📝 License

This project is for educational purposes.  
Feel free to use and adapt!

---

## 🙌 Credits

Developed by Felipe Ferreira Moreira and Kaho Uchiyama.  
Inspired by modern book and library apps.
