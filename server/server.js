// We declare express and request access to express for functionality in the server
const express = require('express');

// We are declaring app have the functionality of express
const app = express();
// We are declaring that we will allow it to run on our local host at port 5000
const PORT = 5000;

// This is the array that contains objects of artists that lives on our server
let artistListArray = require('./server/modules/artist.js')
let songListArray = require('./server/modules/song.js')

// This is the array of song objects that lives on our server


// This tells express to deliver static code from our server to the DOM
// gives access to files in our server at the public folder
app.use(express.static('server/public'));

// Creates the GET route
// Path is /artist
// Also has an anonymous function with two parameters, 
// req and res (request and response)
app.get('/artist', (req, res) => {
    
    // The server will respond with the array of artists
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get('/song', (req, res)=>{
    res.send(songListArray);
})
// Instructs express to listen to the port we established
// This is our port binding
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});