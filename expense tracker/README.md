# 💰 Expense Tracker

A modern, responsive expense tracking web application built with React and Vite. Track your daily expenses, categorize them, and manage your budget with an intuitive user interface.

## ✨ Features

- **Add Expenses**: Easily add new expenses with title, category, and amount
- **Edit & Delete**: Modify existing expenses or remove them completely
- **Category Management**: Organize expenses into predefined categories:
  - 🛒 Grocery
  - 👕 Clothes
  - 💡 Bills
  - 📚 Education
  - 💊 Medicine
- **Filtering**: Filter expenses by category to focus on specific spending areas
- **Sorting**: Sort expenses by title or amount in ascending/descending order
- **Total Calculation**: View total expenses for filtered categories
- **Local Storage**: Data persists between browser sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Form Validation**: Input validation with helpful error messages
- **Context Menu**: Right-click functionality for quick actions

## 🚀 Technologies Used

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS3
- **State Management**: React Hooks (useState, custom hooks)
- **Data Persistence**: Local Storage API
- **Code Quality**: ESLint

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
expense-tracker/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── component/
│   │   ├── CoontextMenu.jsx      # Right-click context menu
│   │   ├── expenseData.js        # Sample expense data
│   │   ├── ExpenseForm.jsx       # Add/edit expense form
│   │   ├── ExpenseTable.jsx      # Display and manage expenses
│   │   ├── Input.jsx             # Reusable input component
│   │   ├── new.jsx               # Additional component
│   │   └── Select.jsx            # Reusable select component
│   ├── hooks/
│   │   ├── useFilter.js          # Custom hook for filtering
│   │   └── useLocalStorage.js    # Custom hook for local storage
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Application styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── package.json                  # Project dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🎯 Usage

### Adding an Expense
1. Fill in the expense form at the top of the page
2. Enter a title (minimum 5 characters)
3. Select a category from the dropdown
4. Enter the amount (positive number only)
5. Click "Add Expense" or press Enter

### Editing an Expense
1. Right-click on any expense row
2. Select "Edit" from the context menu
3. Modify the values in the form
4. Click "Update Expense" to save changes

### Deleting an Expense
1. Right-click on any expense row
2. Select "Delete" from the context menu
3. Confirm the deletion

### Filtering Expenses
- Use the category dropdown in the table header to filter expenses by category
- Select "All" to view all expenses

### Sorting Expenses
- Click the arrow icons next to "Title" or "Amount" columns
- Up arrow: Sort in ascending order
- Down arrow: Sort in descending order

## 🔧 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run lint`** - Run ESLint for code quality
- **`npm run preview`** - Preview production build


## 🌟 Key Features Explained

### Local Storage Integration
The application uses a custom `useLocalStorage` hook to persist data between browser sessions, ensuring your expenses are never lost.

### Custom Hooks
- **`useFilter`**: Efficiently filters expenses based on category selection
- **`useLocalStorage`**: Manages local storage operations with React state

### Form Validation
Comprehensive validation ensures data integrity:
- Title must be at least 5 characters
- Category is required
- Amount must be a valid positive number

### Responsive Design
The application adapts to different screen sizes, providing an optimal experience on both desktop and mobile devices.






**Happy Expense Tracking! 💸**
