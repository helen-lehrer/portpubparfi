# Portland Public Party Finder

### Created by Harold Mesa, Kelly Bruce, Helen Lehrer, Tiberius Lockett , and Noah Lundquist in September of 2022

## Links

* [Deployed Site](https://portpubparfi.netlify.app/)

## Description

A web application that searches the EventBrite API and the PredictHQ API for local events happening in the Portland area by category. The purpose of this project was to explore using APIs in a Node.js and Webpack application. 


## Features

* Uses a form to call upon PredictHQ ro return the top 10 most popular events in a category and call upon the EventBrite API to pull 1 EventBrite event per category.


## Technologies Used

* Built in VS Code (v.1.70.1) using the following languages:
	* HTML
	* CSS
	* Javascript

* Packages used include:
	* Webpack
	* ESLint
	* Babel
	* Jest

* Calls upon the PredictHQ and EventBrite APIs

* Tested in the following browsers:
	* Google Chrome (v.104.0)


## Installation

* Download [Git Bash](https://git-scm.com/downloads)
* Input the following into Git Bash to clone this repository onto your computer:

		>git clone https://github.com/helen-lehrer/portpubparfi

* Enter the cloned project folder "portpubparfi" and type:

		>npm install

* After such you can type:

		>npm run start

* To host the site on your machine at localhost:8080.

The API functionalities will *not* be available until you do the following:

* Create free accounts on the [EventBrite](https://www.eventbrite.com/platform) and [PredictHQ](https://signup.predicthq.com/) APIs. 
* Apply for free API keys.
* Create a .env file in the root of the "portpubparfi" folder
* Open the .env file in VS Code or the editor of your choice
*  You will need to include the following:
```bash
BEARER_TOKEN_EB=[your EventBrite bearer token here]
ACCESS_TOKEN_PHQ=[your PredictHQ access token here]
```

## Known Bugs

* We have experimental branches for Facebook & Twitter APIs that are not functional due to authentification errors.  
* In the UI, when the height of the viewport changes size, the event result div superimposes onto the blue form div.
* There is overflow text for the results of the PredictHQ API, so there is currently a scroll bar at the bottom of the column to account for that.
* The Eventbrite events have to manually updated becasue the API doesn't allow for dynamic search capability.   

## License

Licensed under [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
