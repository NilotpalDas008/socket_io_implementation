# 💬 Real-Time Chat Application

A modern, real-time chat application built with Node.js, Express, Socket.IO, and EJS. Features include live messaging, user presence tracking, typing indicators, and a sleek dark-themed UI powered by Tailwind CSS.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- **Real-Time Messaging**: Instant message delivery using WebSocket technology
- **User Presence**: Live user list showing all connected participants
- **Typing Indicators**: See when other users are typing
- **User Join/Leave Notifications**: Get notified when users enter or exit the chat
- **Responsive Design**: Modern dark-themed UI that works on all devices
- **Message Animations**: Smooth pop-in animations for new messages
- **Auto-Scrolling**: Automatically scrolls to the latest messages

## 🛠️ Technologies Used

- **Backend**:
  - Node.js
  - Express.js v5.2.1
  - Socket.IO v4.8.3
  - EJS v4.0.1 (Templating Engine)

- **Frontend**:
  - HTML5
  - Tailwind CSS (via CDN)
  - JavaScript (ES6+)
  - Socket.IO Client

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd ChatApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 💻 Usage

1. When you first open the application, you'll be prompted to enter a username
2. Once joined, you can:
   - Send messages to all connected users
   - See who's online in the sidebar
   - View typing indicators when others are composing messages
   - Receive notifications when users join or leave

## 📁 Project Structure

```
ChatApp/
├── public/              # Static files (CSS, client-side JS, images)
├── views/
│   └── index.ejs       # Main chat interface template
├── server.js           # Express server and Socket.IO configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🔧 Configuration

The application runs on port `3000` by default. To change the port, modify the `PORT` constant in [server.js](server.js):

```javascript
const PORT = 3000; // Change this to your desired port
```

## 🎨 Features Breakdown

### Real-Time Communication
- Bidirectional event-based communication using Socket.IO
- Low latency message delivery
- Automatic reconnection handling

### User Management
- Dynamic user list that updates in real-time
- Unique username identification
- User presence tracking

### UI/UX
- Dark theme for comfortable viewing
- Smooth animations for messages
- Visual feedback for typing status
- Green status indicators for online users
- Distinct styling for your own messages vs. others

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

Potential features to add:

- [ ] User authentication and registration
- [ ] Private messaging between users
- [ ] Message history persistence (database integration)
- [ ] File/image sharing
- [ ] Emoji support
- [ ] Multiple chat rooms
- [ ] User avatars
- [ ] Read receipts
- [ ] Message editing and deletion
- [ ] Mobile app version

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

NILOTPAL DAS- Feel free to reach out!



⭐ If you found this project helpful, please give it a star!
