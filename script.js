const statusElement = document.getElementById('demo');

const apiUrl = 'https://api.mcstatus.io/v2/status/java/147.185.221.211:38781'; 

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
