# INSTITUTE OF COMPUTER STUDIES SCHEDULE VIEWING WEBSITE

Welcome to the Institute of Computer Studies Schedule Viewing Website! This repository contains the source code for our web application designed to help students and instructors view schedules conveniently.

## Features

- 📅 **View Schedules**: Users can easily view their class schedules for the semester.
- 🔍 **Search Functionality**: Search for specific classes or instructors to quickly find relevant schedule information.
- 📱 **Responsive Design**: Ensures optimal viewing experience across various devices.

## Database Setup:
- **Database Name**: ics_scheduling_db
- Customizable database connection available in the DatabaseConnection.vb file

## Database Tables

### `admins` Table
- **Description**: Store information about instructors
- **Fields**: 
    - adminID (INT): Unique identifier for each instructor
    - RFID (VARCHAR(255)): RFID code for identification
    - Firstname (VARCHAR(100)): First name of the instructor
    - MiddleName (VARCHAR(100)): Middle name of the instructor
    - Surname (VARCHAR(100)): Last name of the instructor
    - Gender (VARCHAR(10)): Gender of the instructor
    - Position (VARCHAR(50)): Position or title of the instructor
    - WorkStatus (VARCHAR(20)): Current work status of the instructor
    - email (VARCHAR(255)): Email address of the instructor
- **Constraints**: 
    - Unique constraint on RFID: `instructor_rfid_unique`
    - Unique constraint on email: `instructor_email_unique`

### `instructor` Table
- **Description**: Store information about instructors
- **Fields**: 
    - InstructorID (INT): Unique identifier for each instructor
    - Firstname (VARCHAR(100)): First name of the instructor
    - MiddleName (VARCHAR(100)): Middle name of the instructor
    - Surname (VARCHAR(100)): Last name of the instructor
    - Gender (VARCHAR(10)): Gender of the instructor
    - Position (VARCHAR(50)): Position or title of the instructor
    - WorkStatus (VARCHAR(20)): Current work status of the instructor
    - email (VARCHAR(255)): Email address of the instructor
- **Constraints**: 
    - Unique constraint on email: `instructor_email_unique`

### `sections` Table
- **Description**: Manage sections with section code, year, and program details
- **Fields**:
    - SectionID (INT): Unique identifier for each section
    - Section_Program (VARCHAR(20)): Program associated with the section
    - Year (VARCHAR(20)): Year of the section
    - Section_Code (VARCHAR(20)): Code representing the section

### `rooms` Table
- **Description**: Maintain information about rooms available for scheduling
- **Fields**:
    - RoomID (INT): Unique identifier for each room
    - Room (VARCHAR(100)): Name or identifier of the room

### `schedules` Table
- **Description**: Schedule classes with details such as instructor name, section, subject, start time, end time, day, and room number
- **Fields**:
    - ScheduleID (INT): Unique identifier for each schedule entry
    - InstructorName (VARCHAR(100)): Name of the instructor teaching the class
    - Section (VARCHAR(50)): Section associated with the class
    - Subject (VARCHAR(50)): Subject of the class
    - StartTime (TIME): Start time of the class
    - EndTime (TIME): End time of the class
    - Day (VARCHAR(50)): Day of the week the class occurs
    - RoomNumber (VARCHAR(50)): Room number where the class is held
    - Semester (VARCHAR(50)) : Semester of current schedule
    - Duration (VARCHAR(20)): Duration of the class

### `subjects` Table
- **Description**: Store subjects along with their descriptions and codes
- **Fields**:
    - SubjectID (INT): Unique identifier for each subject
    - subject_description (VARCHAR(50)): Description of the subject
    - subject_code (VARCHAR(50)): Code representing the subject
- **Constraints**: 
    - Unique constraint on subject_description: `subjects_subject_name_unique`
    - Unique constraint on subject_code: `subjects_subject_code_unique`

## Technologies Used

- ⚙️ **Express.js**: Node.js web application framework for building the backend server.
- 📦 **Body-Parser**: Middleware for parsing request bodies in Express.js.
- 🚦 **Express Router**: Modular routing in Express.js to organize route handling.
- 🖥️ **EJS (Embedded JavaScript)**: Template engine for generating HTML markup with plain JavaScript.
- 🗃️ **mysql2**: MySQL client for Node.js to interact with the MySQL database.

## Installation

To set up the Institute of Computer Studies Schedule Viewing Website locally, follow these steps:

1. Clone this repository to your local machine.
   [![Clone Repository](https://img.shields.io/badge/GitHub-Clone-blue?logo=github)](https://github.com/Johnravee/ICS_SCHED_VIEWING_SUBSYSTEM.git)

2. Navigate to the project directory.
   ```bash
   cd ICS_SCHED_VIEWING_SUBSYSTEM


3.Install dependencies.
   npm install

4.Start the development server.   

## Usage
1.Once the application is running, navigate to http://localhost:4000/.

2.Use the search functionality to find specific classes or instructors.

## License
This project is licensed under the [MIT License](LICENSE).
