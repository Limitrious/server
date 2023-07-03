function getDataFromApi() {
    var xhr = new XMLHttpRequest();
    var apiUrl = 'https://api.mcstatus.io/v2/status/java/147.185.221.211:38781';
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
  
        // Extract the data from the response
        var onlineStatus = response.online;
  
        // Use the data in an if-else statement
        if (onlineStatus) {
            document.getElementById("demo").innerHTML =('The server is online.');
        } else {
            document.getElementById("demo").innerHTML =('The server is offline.');
        }
      }
    };
  
    xhr.open('GET', apiUrl, true);
    xhr.send();
  }
  
  // Call the function to retrieve data from the API
  getDataFromApi();
