# HotRestaurant

* Description: Basic app demonstrating Node and Express with jQuery. Overall purpose is to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list.
* Live Demo: <https://hot-restaurant.herokuapp.com/>

![Hot Restaurant Image](https://raw.githubusercontent.com/afhaque/HotRestaurant/master/images-readme/HotRestaurant.png)

## To Install

* Git Clone the repository
* Navigate to the folder where the repository exists using Git Bash or Terminal
* Run the command `npm install` to download the required dependencies
* Then run the command `node server.js` to run the program

## Notes

* Current app doesn't have admin handling. We'll deal with that at a later time.
* Don't separate the JavaScript from the HTML in the client-side code. (i.e. Dont use external JavaScript. If you do, you will need an additional line of code to configure the express server to know where the javascript is).