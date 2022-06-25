# Friend Zone - A Social Networking Application

# Description
* A REST API for a social media app. 

# Table of Contents
* [Description](#description)
* [License](#license)
* [User Story](#user-story)
* [Tools Used](#tools-used)
* [Installation and Setup](#installation-and-setup)
* [Usage](#usage)
* [Demo](#demo)
* [Endpoints](#endpoints)
* [Questions](#questions)

# License:
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# User Story
* AS a social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data

# Tools used
* MongoDB
* Mongoose
* Express.js
* Node.js
* Nodemon

# Installation and Setup
* Clone this repo to your machine
* Install [MongoDB](https://www.mongodb.com/docs/manual/installation/)
* Install [Mongoose](https://www.npmjs.com/package/mongoose)
* Install [Node.js](https://nodejs.org/en/download/)
* Install [Express.js](https://expressjs.com/en/starter/installing.html)
* Install [Nodemon](https://www.npmjs.com/package/nodemon)

# Usage
* Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://www.mongodb.com/docs/manual/installation/))
* Clone this repo
* Install dependencies with `npm -i`
* Run `npm start` to run the server and make the API live
* Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API.

# Demo
* View a walkthrough video of all of the features [here](https://drive.google.com/file/d/1xD3LVFRoQqX9d16PNNgOH2FvITFPcEb6/view?usp=sharing)

# Endpoints
## User
* Get all users: `GET /api/users`
* Create a user: `POST /api/users`
* Get user by ID: `GET /api/users/:id`
* Update a user: `PUT /api/users/:id`
* Delete a user: `DELETE /api/users/:id`
* Add a friend: `PUT /api/users/:userId/friends/:friendId`
* Delete a friend: `DELETE /api/users/:userId/friends/:friendId`

## Thoughts
* Get all thoughts: `GET /api/thoughts`
* Create a thought: `POST /api/thoughts`
* Get thought by ID: `GET /api/thoughts/:id`
* Update a thought: `PUT /api/thoughts/:id`
* Delete a thought: `DELETE /api/thoughts/:id`

## Reaction
* Add a reaction: `PUT /api/thoughts/:id/reactions`
* Delete a reaction: `DELETE /api/thoughts/:id/reactions/:id`

# Questions
* GitHub url where the project is located: 
* If you have any questions, please feel free to reach me at: Rob.benney@gmail.com
