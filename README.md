# Notification Service

A simple notification service built with Node.js, Express, and MongoDB to send and retrieve user notifications.

---

## Features

- Send notifications (Email, SMS, In-app)
- Retrieve notifications by user ID
- Persistent storage with MongoDB

---

## Prerequisites

- Node.js (v14+)
- MongoDB (running locally or remotely)

---

## Setup

1. **Clone the repository**

2. **Install dependencies**

```bash
npm install
```
3. **Create a .env file in the project root with the following content:**
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/notification_service
```
4. **Start MongoDB**
5. **Run the application**
```
npm start
```
