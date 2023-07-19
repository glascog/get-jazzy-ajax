// We declare express and request access to express for functionality in the server
const express = require('express');

// We are declaring app have the functionality of express
const app = express();
// We are declaring that we will allow it to run on our local host at port 5000
const PORT = 5000;

// This is the array that contains objects of artists that lives on our server
const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

// This is the array of song objects that lives on our server
const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

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