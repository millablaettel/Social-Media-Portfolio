# Students application
Basic web application for demonstrating core client/server architecture concepts as well as the main technologies involved. This website also includes information about myself, as well as my Curriculum Vitae.

## Project structure
The Navigation Bar of my website includes 4 buttons. 
Home Button: Use the 🏡 or the 'Home' Button to get to the main page.
This page includes a link to every Class we had in the wintersemester of 2023/2024. Every link brings you to a informational page about the subjects that were learned.

My Curriculum: This button brings you to my Curriculum Vitae. I used JavaScript to make it interactive! Click on each of the different button to have the information revealed.

My Class: This button brings you to my schedule of the winter semester.

Portfolio: This button brings you to a few selected artworks from me.

### backend
Simple node application `backend/index.js` with a CRUD (Create, Read, Update, and Delete) operations exposed as a HTTP service. Manipulating a dummy file based data storage `backend/students.json`

### frontend
Plain HTML / CSS / Javascript project for creating an interface to manipulate the students API.

## Set up

Make sure you have [node.js](https://nodejs.org/en) installed.

Install project dependencies
```
npm install;
```

Starts backend service on port 3000
```
node backend/index.js
```

Start frontend application on port 8080 [open a new terminal instance]
```
npx http-server frontend

```
