# Quizography
Quizography is a quiz designed to test the users geography knowledge based on still images from a number of cities. Each question is multiple choice, there are four options to choose from. The site has an intuitive design to allow any user to easily understand the concept. The user will be scored so they can try to beat their top scores or play with others to see who has the best geography knowledge.

Live website: https://rovan89.github.io/CI_PP2_Quizography/

![Image of responsive design](assets/images/readme-images/responsive.PNG)

## Table of Content
1. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Stories](#user-stories)
        1. [Site Owner](#site-owner)
        2. [User](#user)
3. [Design](#design) 
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
    1. [Username submission section](#username_submission_section)
    2. [Scoring section](#scoring_section)
    3. [Quiz Instructions](#quiz_instructions)
    4. [Quiz section](#quiz_section)
    5. [Quiz Rating section](#quiz_rating_section)
6. [Testing](#testing)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
    1. [Quiz Images](#quiz-images)
11. [Acknowledgements](#acknowledgements)

## User Experience

### Target Audience
- People looking to challange their geography knowledge
- People looking to pass some time

### User Stories
#### Site Owner
- As the site owner, I want to test the users geography knowledge.
- As the site owner, I want to track the user's score as they progress through the quiz.
- As the site owner, I want to take an input of a username for each user.
- As the site owner, I want to receive feedback from the user.

#### User 
- As a first time site user, I want to easily understand the premis on the quiz.
- As the site user, I want to test my geography knowledge.

## Design
### Colour
- Website background: black
- Navigation button: border gold (#FFC300), background colour blue (#0080FF) and white text
- Users score: background colour gold (#FFC300) and text colour black
- Quiz answer option buttons: border gold (#FFC300), background colour blue (#0080FF) and white text
- Rating section: border gold (#FFC300), background colour blue (#0080FF) and white text

### Fonts
- The font used for this website is Outfit, sourced from Google Fonts

### Structure
The website is structured to make an intuitive experience for the user. 
- The Landing page prompts the user to input their username.
- The next page the user is brought to is the instructions page.
- The last page is the geography quiz.
- Once the quiz has finished the user is prompted to play again which will bring them back to the beginning of the quiz.


## Features

### Username submission section
- This section allows the user to enter their user before the quiz begins

![Image of username submission section](assets/images/readme-images/username-input.PNG)

### Quiz Instructions 
- This section explains to the User what they must to to play the quiz.

![Image of quiz instructions section](assets/images/readme-images/quiz_instructions.PNG)

### Scoring section
- The scoring section keeps track of the users score based on the answers they have submitted

![Image of scoring system](assets/images/readme-images/scoringsystem.PNG)

### Quiz section
- The quiz section holds the main quiz which consists of the image and answer options
- The image will change every time the user clicks the next button and moves on to the next question
- The answers section holds four different answer options to choose from. If the user clicks the correct answer the selection button will turn green and a point will be added to their overall score, if incorrect the button will turn red and the user will not gain a point.

![Image of quiz section](assets/images/readme-images/main-quiz-section.PNG)

### Quiz Rating section
- The rating section allows users to rate the quiz from 1-5 based on their experience. This feedback will also help on improving the quiz in the future.

![Image of rating section](assets/images/readme-images/rating-section.PNG)

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Git
- GitHub
- Gitpod
- Google Fonts

## Testing 
### Performance
### HTML

- No errors returned when checking site through W3C Validator
![Image of HTML validation](assets/images/readme-images/html-val.PNG)


### CSS
- No errors found when stie was run through W3C CSS Validator
![Image of CSS validator](assets/images/readme-images/css-val.PNG)

### Javascript
- No errors found when passing site through Jshint validator
    - There are 7 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 9 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 2 while the median is 1.

### Lighthouse
![Image of lighthouse report](assets/images/readme-images/lighthouse.PNG)

- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

## Bugs
| **Feature / Function** | **Expected Result** | **Actual Result** | **Action** |
|-------------|------------|---------------------|-------------------|
| Click chosen answer | Clicking an answer changes the colour to either green or red depending on the result, one point is added to the score if the user answered correctly. | Colour of the users answer changes appropriately. If the user keeps clicking the correct answer the score will continue to be incremented. Also The user can keep selecting answers until they find the correct answer | Create functions to disable quiz buttons once an answer has been selected |
| Play Again button | The quiz ends and the user can click the button to start a new game | The quiz ends and until the user gives feedback the game can't continue | Created a function to restet the game after the Plat Again button has been clicked |

## Credits
### Quiz Images
- Paris - Image by pexels.com
- London - Image by Chris Schippers, sourced from pexels.com
- Barcelona - Image by Aleksandar Pasaric, sourced from pexels.com
- Singapore - Image by Robert Stokoe, sourced from pexels.com
- Phnom Penh - Image by allPhoto Bangkok, sourced from pexels.com
