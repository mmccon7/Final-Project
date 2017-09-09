var queryURL = "https://api.spotify.comspotify:track:6rqhFgbbKwnb9MLmUQDhG6";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });