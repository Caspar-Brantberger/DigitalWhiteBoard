# DigitalWhiteBoard

A full-stack Trello-inspired project management app focused on simple onboarding, clear workflows, and a smooth user experience.

## Tech Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Spring Boot, Java 21, Spring Web, Spring Security, Spring Data JPA
- Database: PostgreSQL with Flyway migrations
- Local services: Docker Compose

## Project Structure

```text
.
|-- backend/              # Spring Boot API
|   `-- src/main/java/com/digitalwhiteboard/api
|-- frontend/             # Next.js app
|   `-- src/app
|-- compose.yaml          # Local PostgreSQL service
`-- .env.example          # Local environment template
```

## Getting Started

1. Copy `.env.example` to `.env` and adjust values if needed.
2. Start PostgreSQL:

   ```bash
   docker compose up -d
   ```

3. Start the backend:

   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

4. Start the frontend:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

The frontend runs on `http://localhost:3000` and the backend API runs on `http://localhost:8080`.

## Environment

The default local database values are:

```env
POSTGRES_DB=digital_whiteboard
POSTGRES_USER=digital_whiteboard
POSTGRES_PASSWORD=digital_whiteboard
DATABASE_URL=jdbc:postgresql://localhost:5432/digital_whiteboard
DATABASE_USERNAME=digital_whiteboard
DATABASE_PASSWORD=digital_whiteboard
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Initial MVP

- Register and log in with a simple onboarding flow.
- Create and manage boards.
- Organize each board into columns.
- Create, move, and update cards.
- Keep the interface clear enough for quick project planning without setup friction.
