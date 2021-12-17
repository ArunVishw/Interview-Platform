# Interview Platform

### View live demo at - http://ec2-3-145-129-40.us-east-2.compute.amazonaws.com/

## About
This is a MERN Stack based web application providing an optimized **Interview Platform** for recruitements of new Employees/students.

## Product Features
* One to one video call interview
* Live notepad to share notes at real time
* Live code pad to test and run code at real time
* Combination of videocall, live notepad, live codepad (To be developed)

## Requirements
* **MERN STACK**
   * **MongoDB** - MongoDB is a cross-platform document-oriented database 
              program. It is used to store data related to candidates.
   * **Express** - Expres is a web application framework for Node.js. It is used for routing.
   * **React** - React is an open-source JavaScript library for building user interfaces. It is used for front end.
   * **NodeJS** - Node.js is an open-source server environment. It is used for backend.
* **Socket IO** - Socket.IO is a JavaScript library for realtime web applications. It is used for real-time display of notepad and also to make initial peer connections for video calls.
* **WEBRTC** - An open framework for the web that enables Real-Time Communications (RTC) capabilities in the browser. It is used for video calling.


## Installation of Node and NPM

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

## Run project:

* Clone the repository    -    `git clone <ssl/of/repository>`

* Go to project directory (where repository is cloned)    -    `cd <path/to/project>`

* Install dependencies (All info saved on package.json)    -    `npm install`

* Build and run the app    -    `npm run custom`

* Open the app at http://localhost:8080

