const statusElement = document.getElementById('demo');
statusElement.innerText = 'Checking status...'; 

const apiUrl = 'https://api.mcstatus.io/v2/status/java/147.185.221.20:62649'; 

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
