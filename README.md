# Favourite Student List

A simple React JS application to manage a list of favourite students.

This project demonstrates the use of React Router, useContext, createContext, conditional rendering, and dynamic rendering using the map() method.

## Project Objective

The main objective of this project is to create a Favourite Student List application using React JS.

Users can:

- View the list of students
- Add students to favourites
- Prevent duplicate students from being added
- View favourite students
- Remove students from favourites
- Navigate between pages without reloading the page

## Technologies Used

- React JS
- React Router
- JavaScript
- HTML
- CSS
- Vite
- GitHub Pages

## React Concepts Used

### 1. React Router

React Router is used to create multiple pages.

Pages included:

- Student List
- Favourite Students

### 2. createContext()

`createContext()` is used to create a Student Context for managing favourite students globally.

### 3. useContext()

`useContext()` is used to access the favourite student data and functions from different components.

### 4. useState()

`useState()` is used to store and update the favourite student list.

### 5. map()

The `map()` method is used to display the students dynamically from an array of objects.

### 6. Conditional Rendering

Conditional rendering is used to display:

- "No favourite students added" when the favourite list is empty
- "Added to Favourite" when a student is already added

## Project Structure

```text
favourite-student-list/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── StudentContext.jsx
│   │
│   ├── pages/
│   │   ├── StudentList.jsx
│   │   └── FavouriteStudents.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
