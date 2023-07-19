$(document).ready(onReady);

function onReady() {
    $.ajax({
        // Tells Ajax (our jscript tool which allows our client to
        // communicate with nour server) 
        //  how to to communicate with our server.
        type: 'GET',
        // .... and where to go to get it... the route!
        url: '/artist'
        // .then is a function that will take in our response from the server
        // and pass it as an argument
    }).then(function (response) {
        // while looping over our array of artists
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            // which will append it to our DOM
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    $.ajax({
        
        type: 'GET',
        
        url: '/song'
        
    }).then(function (response) {
        
        for (let i = 0; i < response.length; i++) {
            let song = response[i];
            
            $('#songTableBody').append(`
                <tr>
                    
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `);
        }
    });
    // TODO Add ajax request for /songs and display on DOM
}