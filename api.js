const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
      if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
      })
      .then((text) => {
            const json = JSON.parse(text);
            json.forEach(post => {
                  console.log('Post User ID:', post.userId);
                  console.log('Post ID:', post.id);
                  console.log('Post Title:', post.title);
                  console.log('Post Body:', post.body);
                  console.log('-------------------------');
            });
      })
      .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
      });