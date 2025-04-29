const statusElement = document.getElementById('demo');
statusElement.innerText = 'Checking status...'; 

const apiUrl = 'https://api.mcstatus.io/v2/status/java/57.158.80.86:25565'; 

const updateStatus = () => {

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if(data.online) {
        statusElement.innerText = 'The server is online';  
      } else {
        statusElement.innerText = 'The server is offline';
      }
    });

}

updateStatus();

setInterval(updateStatus, 15000);
