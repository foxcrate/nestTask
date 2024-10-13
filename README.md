# Real-Time Microservices Chat Application with Socket.IO, Postgress and Redis

## Finished Tasks
- Setup:
  - Create a new Node.js project using NestJS.
  - Install and configure Socket.IO for real-time communication.
  - Use Postgress for storing user data (e.g., usernames) and chat messages.

- Design Pattern:
  - Implement the Repository Pattern to abstract data access for users and messages.
  - Use interfaces to define repository methods, promoting loose coupling and easier testing.

- Features:
    Auth System:
  - Registration and authenticate users using JWT token
    Real-Time Messaging:
  - Implement a Socket.IO server that allows users to connect, join rooms, and send messages.
  - Implement typing indicators to show when users are typing in a room.
  - Allow users to leave and rejoin rooms, maintaining message history.
    Message Persistence:
  - Store chat messages in Postgress with timestamps and user IDs.
  - Implement features to fetch message history for a specific room, withpagination (e.g., load more messages).

- Notifications:
  - Implement a notification system that alerts users when they receive direct messages or when someone joins their room.

## how to run application locally
  - Go to each microservice folder and run 'npm install'
  - Create 3 .env files: in Gatway microservice (only contains JWT_SECRET), User microservice (only contains same JWT_SECRET) and Database microservice (contains: DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME)
  - The db tables will be created automaticaly
  - Go to each micro-service folder and run 'npm run start:dev'
  - Register a user (provide a name, email and password)
  - Signin to your account (provide email and password)
  - Create a room (provider a name), Authorize the request with Bearer Token
  - Log to the socket (provide the bearer_token in the headers)
