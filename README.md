This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Before you begin, this application is developed only by using react, react-redux. Please keep in mind this app is not meant ot use hooks since it is a part of my react developer curriculum, I am taking it step by step.**



# Would you rather .... ?

Would You Rather is a polling game that presents the user with a series of questions that can be answered one of two ways.

This app is the second of three projects required for [Udacity's React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Installation

Clone this repository, change the project directory, user `npm` to install the dependencies:


    git clone https://github.com/meghabalaraju/reactnd-would-you-rather.git 

    cd reactnd-would-you-rather 

    npm install


## Usage
The project can be run with

    npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br />

## App functionality

### Login flow
- You can log in as an existing user. You can select a name from the list of existing users.
- The application works similarly regardless of which user is selected.
- Fr logout, you will find a logout button in the top-right corner once you logged in.

### Home page
- The answered and unanswered polls are both available at the `/home`.
- The unanswered questions are shown by default.
- You can alternate between viewing answered and unanswered polls.
- The navigation bar can be found at the top of each page with that,
    - You can navigate to the leaderboard.
    - You can navigate to the form that aloows you to carete a new poll.
    - The name of the logged in user is visible.

### Unanswered vs Answered questions
- If a question hasn’t been answered by the current user, it will be in the “Unanswered” category.
- If it is anwered by you, you can find it in “Answered” category.
- The question in both categories are arranged from the most recently created (top) to the least recently created (bottom).
- Each question in both category has a link/button(view poll) to details of the question.
- The details of the question are available at `/question/:question_id`.
- For unanswered question, the following is shown:
    - the text “Would You Rather”;
    - the picture of the user who posted the polling question; and
    - the two options.
- For answered question, the following is shown:
    - the text of the option;
    - the percentage of people who voted for that option.
    - the number of people who voted for that option;
    - the option selected by the logged in user clearly marked.
- If you create a question and then you or another user tries to access that question by its url, the user should be asked to sign in and then be shown a 404 page and asks you to login. 

**Note:  The new questions will not be accessible at their url because of the way the backend is set up in this application**

- Upon voting for a unanswered question, all of the information of the answered question is displayed.
- Your response is clearly visible on the question details page.
- When you come back to the home page, the question appears in the “Answered” column.
- The data on the leaderboard changes appropriately.

### Adding/Creating new poll
- The form is available at `/add`.
- It shows the text “Would You Rather” and has a form for creating two options.
- Upon submitting the form, a new poll is created and you will be taken to the home page.
- The new polling question appears in the unanswered questions category on the home page.

### LeaderBoard
- The Leaderboard is available at `/leaderboard`.
- Each entry on the leaderboard contains the following:
    - the user’s name;
    - the user’s picture;
    - the number of questions the user asked; and
    - the number of questions the user answered.
    - Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.


