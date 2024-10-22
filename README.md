# 🖼️ AI Background Removal Web App 

Welcome to the **AI-Powered Background Removal Web Application**! 🚀  
This application allows users to easily remove backgrounds from their images using AI. Built with **ReactJS**, **Node.js**, and **MongoDB**, the app features a modern, fully immersive user interface, user authentication through **Clerk**, and image processing powered by AI.

![App Preview](https://bg-removal-j1k6.vercel.app/)

## 🌟 Features
- 🎨 **AI-Powered Background Removal**: Instantly remove the background from any image using advanced AI models.
- 🔒 **User Authentication**: Secure sign-up and login functionality using **Clerk**.
- 💾 **Image Storage**: Upload and store images in **MongoDB**.
- 🎯 **Responsive Design**: Optimized for both desktop and mobile for a seamless user experience.
- ⚡ **Fast and Efficient**: Quick background removal with real-time image processing.

## 🛠️ Tech Stack
- **Frontend**:  
  - [React.js](https://reactjs.org/)
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  
- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)

- **Authentication**:  
  - [Clerk](https://clerk.dev/)

- **AI Image Processing**:  
  - [Vercel](https://vercel.com/) hosted API for background removal.

## ⚙️ Installation

### Prerequisites:
Ensure that you have the following installed on your local machine:
- Node.js (v14 or later)
- MongoDB
- Git

### Setup Instructions:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/merustam7172/bg-removal-app.git
   cd bg-removal-app
2. **Install dependencies:**
   ```bash
   npm install
3. **Set up environment variables: Create a .env file in the root of the project with the following variables:**
   ```bash
     MONGO_URI=your-mongodb-uri
    CLERK_API_KEY=your-clerk-api-key
    VERCEL_API_URL=https://bg-removal-alpha.vercel.app/api/image/remove-bg
4. **Run the development server:*
   ```bash
   npm run dev


  # 💻 Usage
- **Sign Up / Log In:** Start by signing up or logging in with Clerk's authentication system.
- **Upload an Image:** Select an image from your device to upload.
- **Remove Background:** Click the "Remove Background" button to process the image.
- **Download the Result:** Once the background is removed, download the image with a transparent background.


   

