<h1>Friend Finder</h1>

Live version: https://fathomless-beyond-86927.herokuapp.com/
<hr></hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr></hr>

<h3> App screenshot </h3>

![alt text](https://raw.githubusercontent.com/mjbenefiel/FriendFinder/master/app/img/friendfinderdemo.jpg "Friend Finder")

<h2> Project overview</h2>
Friend Finder is a full-stack web application implemented using Node.js and Express on the back end, and Materialize on the front end. It's deployed to Heroku. Friend Finder is basically a simple dating app that takes in user responses and matches their results to their closest match.
<hr></hr>

<h2> How it works </h2>
After clicking "go to survey", enter your name and insert an image link. Complete the survey questions by selecting the drop-down option that most accurately reflects your position to the question. Your closest match will be revealed after you've completed the entire survey and click "submit responses".
<hr></hr>

<h2>Technology used</h2>

[Node.js](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[Heroku](https://heroku.com/)

[Materialize](https://materializecss.com/)

<hr></hr>

<h4>Below is a thorough, but not comprehensive, step-by-step process of how I got the app running in terms of code</h4>

- data
    - friends.js
        - array of objects storing the app's data

- public
    - home.html
        - landing page to enter the survey
    - survey.html
        - webpage for users to interact with the app
        - utilization of jQuery for click handlers, user input and data validation
        - AJAX call for adding user input to friends array

- routing
    - apiRoutes.js
        - app.get responds to client request by pulling list of friends from friends.js and displaying the array of objects in /api/friends
        - app.post responds to client request by posting new user entries in /api/friends and including them in the array of objects
            - declare name, image and difference variables
            - for loop that runs through the friends array 
                - nested for loop that runs through responses
                    - math.abs function that subtracts friends scores from responses
                - if statement that records friend match if lowest difference in score is returned (highest similarity)
    
    - htmlRoutes.js
        - app.get to pull homepage
        - app.get to pull survey page

- server.js
    - Configuration of server and application
