# INSTITUTE OF COMPUTER STUDIES SCHEDULE VIEWING WEBSITE

Welcome to the Institute of Computer Studies Schedule Viewing Website! This repository contains the source code for our web application designed to help students and instructors view schedules conveniently.

## Features

- 📅 **View Schedules**: Users can easily view their class schedules for the semester.
- 🔍 **Search Functionality**: Search for specific classes or instructors to quickly find relevant schedule information.
- 📱 **Responsive Design**: Ensures optimal viewing experience across various devices.

## Database Information

The application utilizes a MySQL database to store schedule information. Below are the details of the database structure:

- **Database Name**: `ics_scheduling_db`
- **Database Connection**: Customizable database connection available in the `Connection.js` file.

### Tables

1. **instructor**
   - Description: Store information about instructors
   - Fields:
     - InstructorID (INT): Unique identifier for each instructor
     - RFID (VARCHAR(255)): RFID code for identification
     - Firstname (VARCHAR(255)): First name of the instructor
     - MiddleName (VARCHAR(255)): Middle name of the instructor
     - Surname (VARCHAR(255)): Last name of the instructor
     - Position (VARCHAR(255)): Position or title of the instructor
     - WorkStatus (VARCHAR(255)): Current work status of the instructor
     - email (VARCHAR(255)): Email address of the instructor
   - Constraints:
     - Unique constraint on RFID: `instructor_rfid_unique`
     - Unique constraint on email: `instructor_email_unique`

2. **sections**
   - Description: Manage sections with section code, year, and program details
   - Fields:
     - SectionID (INT): Unique identifier for each section
     - Section_Code (VARCHAR(255)): Code representing the section
     - Year (VARCHAR(255)): Year of the section
     - Section_Program (VARCHAR(255)): Program associated with the section

3. **rooms**
   - Description: Maintain information about rooms available for scheduling
   - Fields:
     - RoomID (INT): Unique identifier for each room
     - Room (VARCHAR(255)): Name or identifier of the room

4. **schedules**
   - Description: Schedule classes with details such as instructor name, section, subject, start time, end time, day, and room number
   - Fields:
     - ScheduleID (INT): Unique identifier for each schedule entry
     - InstructorName (VARCHAR(255)): Name of the instructor teaching the class
     - Section (VARCHAR(255)): Section associated with the class
     - Subject (VARCHAR(255)): Subject of the class
     - StartTime (TIME): Start time of the class
     - EndTime (TIME): End time of the class
     - Day (VARCHAR(255)): Day of the week the class occurs
     - RoomNumber (VARCHAR(255)): Room number where the class is held

5. **subjects**
   - Description: Store subjects along with their descriptions and codes
   - Fields:
     - SubjectID (INT): Unique identifier for each subject
     - subject_description (VARCHAR(255)): Description of the subject
     - subject-code (VARCHAR(255)): Code representing the subject
   - Constraints:
     - Unique constraint on subject_description: `subjects_subject_description_unique`

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
