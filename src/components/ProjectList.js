import {
    boardgameDB_img,
    checkers,
    dateProj_img, drivingTest,
    gymApp,
    multiPerceptron, nasaProj_img,
    pythonCalc,
    serverGuess,
    weightedGrades,
    movieLookup
} from "../assets/img";

export const jsprojects = [
    {
        title: "Move Search",
        description: "Personal Project\n React Project. User search pulls data from OMDb API and returns top 10 results.",
        imgUrl: movieLookup,
    },
];

export const javaprojects = [
    {
        title: "Due Date Tracker",
        description: "Personal Project\n Tracks all class due dates and displays in order of nearest date.",
        imgUrl: dateProj_img,
    },
    {
        title: "Board Game Event Database",
        description: "School Group Project\n Tracks board games and events associated with them in SQL.",
        imgUrl: boardgameDB_img,
    },
    {
        title: "Checkers Game",
        description: "School Solo Project\n Checkers GUI game which has computer player implementation. Optionally can be played in CLI.",
        imgUrl: checkers,
    },
    {
        title: "Gym App",
        description: "School Group Project\n Gym application, which allows users such as clients, trainers, and owners to register or login. Each role has different permissions.",
        imgUrl: gymApp,
    },
    {
        title: "Server Guess Game",
        description: "School Solo Project\n Host and client implementation for guessing game. Shows movie quote and picture and allows user to guess the movie. Includes leaderboard functionality.",
        imgUrl: serverGuess,
    }
];

export const pythonprojects = [
    {
        title: "Periodic Payment Calculator",
        description: "School Solo Project\n Receives input for payment, interest, and number of payments to calculate a total. GUI uses Tkinter.",
        imgUrl: pythonCalc,
    },
    {
        title: "Weighted Grade Calculation",
        description: "School Solo Project\n Grabs input csv file with student data. Calculates student grades with assignment weights and outputs as CLI.",
        imgUrl: weightedGrades,
    },
    {
        title: "Machine Learning Multi-Layer Perceptron",
        description: "School Solo Project\n Implements a multi-layer perceptron machine learning model to learn quadratic function.",
        imgUrl: multiPerceptron,
    }
];

export const cprojects = [
    {
        title: "Driving Test Grader",
        description: "School Solo Project: C++\n With answers received from test, grades test and informs user of pass or fail. Error handling included.",
        imgUrl: drivingTest,
    },
    {
        title: "NASA Psyche Mission Simulation",
        description: "School Group Project: C#\n Simulation of NASA mission currently underway. This project uses Unity/C# scripts.",
        imgUrl: nasaProj_img,
    },
];