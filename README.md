# Campus-Feedback-Portal
fullstack project

# Campus Feedback Portal
A Full Stack Web Application
1. Introduction

The Campus Feedback Portal is a full stack web application designed to collect and manage student feedback in an efficient, secure, and organized manner.
This project helps students understand frontend development, backend development, authentication, and database integration using modern web technologies.

2. Purpose of the Project
The main objective of this application is:

To provide a platform where students can submit feedback
To allow administrators to review, manage, update, and delete feedback
To demonstrate real-world full stack application development

=> User Roles
=> Student

Register and log in
       |
Submit feedback
       |
View submitted feedback

Admin

Log in securely
         |
View all student feedback
         |
Update and delete feedback

3. High-Level Architecture

Key Principle:
One Frontend – One Backend
Frontend (React)
        ↓
Backend (Node.js + Express)
        ↓
Database (MongoDB)

4. Database Design (DB-First Approach)
4.1 Database

MongoDB (Atlas or Local)
ODM: Mongoose
4.2 Collections
4.2.1 Users Collection
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "student | admin",
  "department": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
Indexes:email (unique)

4.2.2 Feedback Collection
{
  "_id": "ObjectId",
  "studentId": "ObjectId (ref users)",
  "subject": "string",
  "facultyName": "string",
  "rating": "number",
  "comment": "string",
  "submittedAt": "Date"
}
Indexes:studentId,subject

5 Backend Design (Node.js + Express)
5.1 Technology Stack

-> Node.js
-> Express.js
-> MongoDB + Mongoose
-> JWT Authentication

5.2 Backend Folder Structure
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js

5.3 Authentication Flow (Student & Admin)

-> User registers or logs in using email and password
        
-> Backend validates credentials

-> User role (student/admin) is verified

-> JWT token is generated

-> User is redirected to the respective dashboard

5.4 API Endpoints (Sample)

/api/auth/register

/api/auth/login

/api/feedback/add

/api/feedback/get

/api/feedback/update

/api/feedback/delete

6 Frontend Design (MERN – React)
6.1 Tech Stack

-> React
-> React Router
-> Axios
-> HTML & CSS
7
6.2 Frontend Folder Structure
frontend/
├── components/
├── pages/
├── services/
├── App.js
├── index.js

6.3 Key Pages

->Login Page
->Registration Page
->Student Dashboard
->Feedback Submission Page
->Admin Dashboard

7 Feedback Management
7.1 Current Scope

->Students submit feedback
->Admin views all feedback
->Admin can edit and delete feedback

7.2 Validation Rules

-> All fields are mandatory

-> Only logged-in users can submit feedback

 8. Security Considerations

-> JWT-based authentication
-> Role-based authorization
-> Input validation
-> Secure API access

9. Features

=>User Authentication
=>Feedback Submission
=>CRUD Operations

Admin Management Dashboard
10. CRUD Operations

Create: Student submits feedback

Read: Admin and student view feedback

Update: Feedback can be edited

Delete: Feedback can be removed

11. Conclusion

The Campus Feedback Portal is a full stack web application that demonstrates real-world usage of React, Node.js, Express, and MongoDB.
It implements authentication, CRUD operations, role-based access, and secure database integration.


