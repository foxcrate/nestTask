# nestTask

## Finished Tasks
- Setup:
  - Create a new Node.js project using NestJS.
  - Install and configure Socket.IO for real-time communication.
  - Use Postgress for storing user data (e.g., usernames) and chat messages.

- Design Pattern:
  - Implement the Repository Pattern to abstract data access for users and messages.
  - Use interfaces to define repository methods, promoting loose coupling and easier testing.

- Features:
    Real-Time Messaging:
  - Implement a Socket.IO server that allows users to connect, join rooms, and send messages.
  - Implement typing indicators to show when users are typing in a room.
  - Allow users to leave and rejoin rooms, maintaining message history.
    Message Persistence:
  - Store chat messages in Postgress with timestamps and user IDs.
  - Implement features to fetch message history for a specific room, withpagination (e.g., load more messages).

- Notifications:
  - Implement a notification system that alerts users when they receive direct messages or when someone joins their room.
