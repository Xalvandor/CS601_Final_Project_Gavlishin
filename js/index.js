const express = require('express');
const app = express();

app.use((req, res, next) => {
  res
    .header('Access-Control-Allow-Origin',
      '*');
  res
    .header('Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE');
  res
    .header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With,Content-Type, Accept');
  next();
});

app.get('/data', (req, res) => {
  res
    .json
    (
      {
        name: 'Brazil',
        currency: 'BRL'
      }
    );
})

app.listen(3000, () => {
  console
    .log('Server is running on port 3000');
});
