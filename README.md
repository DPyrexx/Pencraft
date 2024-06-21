# Writing the provided content into a README.md file

readme_content = """
# Pencraft App

## Overview
We are thrilled to present the Pencraft App, a project we've successfully completed, albeit with some deviations from our initial plans. We've added numerous functionalities to enhance user experience. The Pencraft App leverages React.js for the frontend, Node.js for the backend, and MongoDB for the database, providing ease of function and a structured coding style. This documentation details how to run the project on different systems and outlines our development decisions and processes.

## Prerequisites
Before running the Pencraft App, ensure you have the following installed:
- Node.js
- MongoDB
- Node Package Manager (npm)
- MongoDB GUI (e.g., MongoDB Compass)

## Installation
To set up and run the Pencraft App, follow these steps:

1. **Download and Unzip the Project Code:**
   - Obtain the project files and unzip them.

2. **Install Prerequisites:**
   - Download and install [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/), and [MongoDB](https://www.mongodb.com/try/download/community).
   - Install a MongoDB GUI for easier database access and management.

3. **Start the Servers:**
   - **Database Server:**
     1. Navigate to the MongoDB bin directory.
     2. Start the database server using the command:
        ```bash
        ./mongod.exe --port 27017
        ```
     3. The database will be accessible at `localhost:27017`.

   - **Frontend and Backend Servers:**
     1. Open two terminal windows.
     2. In the first terminal, navigate to the frontend directory and run:
        ```bash
        npm install --force
        npm start
        ```
     3. In the second terminal, navigate to the backend directory and run:
        ```bash
        npm install --force
        npm start
        ```

4. **Access the Application:**
   - Use the frontend GUI to register and log in.

## Architecture and Technologies

### Frontend Technologies
- **HTML/CSS:** Used for designing and styling the user interface, ensuring an attractive and user-friendly design.
- **JavaScript:** Enhances interactivity and functionality, handling API requests and managing JSON tokens.
- **React:** Utilized for building the interface components, providing a dynamic and responsive user experience.

### Backend Technologies
- **Node.js:** Executes backend services, defines APIs, and routes for frontend access.
- **Express Framework:** Provides backend support, managing server-side logic efficiently.
- **MongoDB:** Manages data storage for authors, writings, categories, notifications, and statistics schemas.

## Conclusion
The Pencraft App features a space theme to symbolize the vast knowledge it can store and retrieve. Future improvements could include enhanced error handling, GUI improvements, additional functionalities such as a better notification schema, and integration with Google and other social media platforms.

This project has been a valuable learning experience, and we look forward to further enhancements.

### Contributors
- Adedamola Olusunmade
- Seyon Amosu
- Dennis Ufomadu
