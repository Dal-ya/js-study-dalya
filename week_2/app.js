const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 반갑습니다!!');
});

app.get('/js', (req, res) => {
  res.send('Js For Me!!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
