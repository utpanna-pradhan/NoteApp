# 📝 Notes App 
## 📌 Project Overview

This is a simple Notes application built using React to demonstrate strong frontend fundamentals.
The app allows users to add, view, and delete notes with a clean UI, proper state management, and user-friendly validation.
The focus of this project is component structure, UI state handling, and developer thinking, not backend or advanced tooling.

## 🚀 How to Run the Project
### Prerequisites

Node.js 
npm or yarn installed

### Steps to Run Locally
#### 1. Clone the repository:
    git clone <your-repo-url>

####  2. Navigate to the project folder
    cd notes-app

#### 3. Install dependencies
    npm install

#### 4. Start the development server
    npm run dev


The app will run on:
 http://localhost:5173 (or the port shown in terminal)

## 🧩 Component Breakdown

The application is broken into small, reusable components to keep the code clean and maintainable.

### App.jsx
- Root component of the application.
- It decides:
what data exists,
when to show loader,
when to show notes,
when to show empty message.
- Manages global UI state:
- Notes list
- Loading state

Handles:
- Adding a note
- Deleting a note
- Showing loader or empty state conditionally

### NoteForm.jsx
- Responsible for adding new notes
- This component:
Shows input fields
Validates user input
Sends the new note to App.js
Features:
- Controlled inputs (title & description)
- Validation for empty title
- Error message handling
- Submit button disabled when title is empty
- Clears form after successful submission

### NoteList.jsx
- Receiving all notes
- Looping through them
- Showing each note using NoteItem
- Displays the list of all notes
- Receives notes as props
- Iterates over notes and renders NoteItem

### NoteItem.jsx
- Displays a single note

Shows:
- Title
- Description (if available)
- Provides delete functionality via a callback

### Loader.jsx
- Displays a loading message
- Used to simulate data loading on initial render

### EmptyState.jsx
- Displayed when there are no notes
- Improves UX by guiding the user to add their first note

## 🔄 State Management Explanation
- This project uses React's useState and useEffect hooks for state management.

States Used

notes → stores the list of notes

loading → controls loader visibility

title & description → controlled form inputs

error → manages validation message for title input

## Data Flow

NoteForm sends new note data to App

App updates the notes state

Updated notes are passed down to NoteList and NoteItem

This top-down data flow keeps the app predictable and easy to debug.

##  Assumptions, Limitations & Trade-offs
Assumptions

Notes are stored only in memory (no backend)

Page refresh will reset data

Limitations

No authentication or user accounts

No persistent storage (e.g., database or localStorage)

Styling is custom CSS (no advanced UI libraries)

Trade-offs Made

Chose simplicity over complexity to focus on fundamentals

Avoided Redux / Context API since app state is small

Loader is simulated using setTimeout to demonstrate UI state handling

These decisions were made intentionally to align with the assignment focus on frontend fundamentals.

## Screenshots
<img width="1366" height="534" alt="Screenshot (764)" src="https://github.com/user-attachments/assets/b06c1886-a881-46b3-9936-8e1484bd26da" /><img width="1366" height="530" alt="Screenshot (765)" src="https://github.com/user-attachments/assets/9861030c-edb3-4fd8-bcd8-51d32f86d3f4" />
<img width="1366" height="583" alt="Screenshot (766)" src="https://github.com/user-attachments/assets/958b1e06-0601-4db6-80f4-592b199c80cf" />

