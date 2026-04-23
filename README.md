# Campus Feedback Portal

A full-stack campus feedback portal built with React, Express, MongoDB, and JWT authentication.

## Features

- Student and admin role-based login
- Student registration and feedback submission
- Admin dashboard to view, update, and delete feedback
- Ratings, subjects, faculty-wise feedback, and summary stats
- Modern landing page with a campus-style hero section

## Project Structure

```text
backend/
frontend/
```

## Backend Setup

1. Open `backend/.env.example` and copy it to `backend/.env`.
2. Update the MongoDB connection string and JWT secret.
3. Install packages:

```bash
cd backend
npm install
```

4. Start the server:

```bash
npm run dev
```

The backend runs on `http://localhost:5000`.

### Default Admin

When the server starts, it creates a default admin if one does not exist.

- Email: `admin@campusportal.com`
- Password: `Admin@123`

Change these from the `.env` file before submitting the project.

## Frontend Setup

1. Install packages:

```bash
cd frontend
npm install
```

2. Optionally copy `frontend/.env.example` to `frontend/.env` if you want to change the API URL.

3. Start the React app:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173`.

## Main API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/feedback`
- `GET /api/feedback/my-feedback`
- `GET /api/feedback`
- `PUT /api/feedback/:id`
- `DELETE /api/feedback/:id`

