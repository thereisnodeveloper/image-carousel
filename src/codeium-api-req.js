// Make a request to the Codeium API every X minutes
setInterval(
  () => {
    fetch('https://api.codeium.ai/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token YOUR_AUTH_TOKEN',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: 'What is the current stock price of Google?',
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  },
  60 * 1000 * X,
); // X is the number of minutes between requests (e.g. 10 for every 10 minutes)
