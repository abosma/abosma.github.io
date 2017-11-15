var apiKey = 'RUsKQJZDAwUmKLHpKeSZ30tg2Z4V2xBEYhrFPEx6';

$(document).ready(function() {
    $.ajax({
      url: 'https://api.challonge.com/v1/tournaments.json',
      type: 'GET',
      dataType: 'json',
      success: function() { alert('hello!'); },
      error: function() { alert('boo!'); },
      beforeSend: setHeader
    });
  });

  function setHeader(xhr) {
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('api_key', apiKey);
  }