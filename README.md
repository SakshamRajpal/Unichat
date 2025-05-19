  ![Screenshot 2024-10-17 113333](https://github.com/user-attachments/assets/82174cdd-9719-450e-a6c9-1ab0a97dcef1)

 # 📱 Unichat - A Modern Messenger Alternative

**Unichat** is a powerful, real-time messaging application designed to be a modern alternative to Facebook Messenger. It leverages the capabilities of **Firebase**, **Stream Chat**, and **React.js** to deliver a fast, responsive, and developer-friendly chat experience.

---

## ⚙️ Features:

### 🔐 Firebase Authentication
- Secure sign-in and sign-up flows using third-party providers like Google and Facebook.
- User session management and protected route handling with `authState`.

### 🧩 Stream Chat API
- Real-time messaging through Stream services.
- Handling user connections, channels, and messages via Stream Chat SDK.

### 💻 React.js for Frontend
- Responsive design optimized for all screen sizes.
- React Router for seamless navigation between chat rooms.

### 📡 Real-Time Data Management
- Real-time updates using Firebase Realtime Database or Firestore.
- Syncing chat data, message status, and read receipts.

---

## 🧠 What I Learned:

- Integrated **Facebook for Developers** to enable login via Facebook using Firebase.
- Firebase's Google authentication is straightforward and reliable, especially as it’s developed by Google.
- Explored alternatives like *LiveChat* and *SendBird*.
- Used React hooks such as `useState`, `useContext`, `useNavigate`, and `useSelect` to manage state and routing.
- Found **Stream Chat** developer-friendly and efficient for chat integration.

---

## 🔗 Project Links:

- 📁 **GitHub Repository:** [View Code](https://github.com/SakshamRajpal/Unichat)
- 🚀 **Live Demo (Hosted on Netlify):** [Launch App](https://unichatbysaksham.netlify.app/) *(Please clear cookies if needed)*

---

## 🤸 Quick Start:

Follow these steps to get the project running locally.

### 🔧 Prerequisites

Ensure you have the following installed:
- Git
- Firebase
- Node.js
- npm (Node Package Manager)

### 📦 Clone the Repository
```bash
git clone https://github.com/SakshamRajpal/Unichat.git
cd Unichat
```


### 📥 Install Dependencies
```bash
npm install
```

### 🔐 Set Up Environment Variables
- Create a .env.local file in the root directory:
```bash
# APPWRITE
REACT_APP_STREAM_CHAT_ID=
REACT_APP_STREAM_CHAT_KEY=
REACT_APP_STREAM_CHAT_SECRET=
firebase_apiKey=
firebase_authDomain=
firebase_projectId=
firebase_storageBucket=
firebase_messagingSenderId=
firebase_appId=

```
Replace the placeholders with your actual credentials.

###  ▶️ Run the Development Server
```bash
npm run start
```
Visit http://localhost:3000 in your browser.

---

## 🤝 Contributing:

- Found a bug or want to contribute?
- Feel free to fork the repo, make changes, and open a pull request.
- ⭐ If you like this project, consider giving it a star!
