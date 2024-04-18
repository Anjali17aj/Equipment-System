# Equipment System-Inspired Full-Stack Web Application

## Project Overview

Excited to share my journey of developing a feature-rich full-stack web application. The project is built using MongoDB, Express.js, and Node.js.

## Technologies & Packages Used

### Backend

- **MongoDB**: NoSQL database for flexible and scalable data storage.
- **Express.js**: Web application framework for Node.js, providing robust features for web and mobile applications.
- **Node.js**: JavaScript runtime for server-side development.

### Authentication

- **Passport.js**: Middleware for user authentication, supporting various strategies.
- **Dotenv**: Environment variable management for secure configuration.

### Image Storage

- **Cloudinary**: Cloud-based image and video management solution.

### Maps

- **Mapbox**: Platform for custom maps and location-based experiences.

### Frontend

- **EJS**: Embedded JavaScript templates for dynamic content rendering.

### Session Management

- **Connect Flash**: Middleware for flash messages.
- **Connect Mongo**: MongoDB session store for Express.js.
- **Cookie Parser**: Middleware for parsing cookies.

### Validation

- **Joi**: Library for data validation.

### Object Modeling

- **Mongoose**: MongoDB object modeling for Node.js.

### File Uploads

- **Multer**: Middleware for handling file uploads.

### Social Authentication

- **Passport Local**: Local authentication strategy.
- **Passport Google OAuth20**: Google OAuth2.0 authentication strategy.
- **Passport Local Mongoose**: Mongoose-specific authentication strategy.
  Authentication

## Key Features

- **User Authentication:** Login, Logout, and User Profile Section
- **CRUD Operations:** Add, Edit, and Delete Listings
- **Review System:** Add and Delete Reviews
- **Account Management:** Update User Account and Password
- **User Data Security:** Password Hashing and Encryption
- **Interactive Maps:** Leveraging Mapbox for Location Visualization
- **Login with Google:** Authenticate with your Google account for a seamless experience
- **Login with Email:** Traditional email login for user convenience

## How to Install

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Anjali17aj/Equipment-System.git
   cd Equipment-System
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Configure the following environment variables by creating a .env file in the root of your project:

   ```bash
   CLOUD_NAME=
   CLOUD_API_KEY=
   CLOUD_API_SECRET=
   MAP_TOKEN=
   ATLASDB_URL=
   SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   GOOGLE_CALLBACK_URL=

   ```

   Replace the values with your specific configurations.

4. **Run the Application:**

   ```bash
   node app.js
   ```

5. **Open in Your Browser:**

   Open http://localhost:8080/listings in your web browser.
