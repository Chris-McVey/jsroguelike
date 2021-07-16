const express = require('express');

const port = 3000;

const app = express();

app.use(express.static('public'));
app.use('/assets', express.static('assets'));
app.use('/lib', express.static('lib'));

app.listen(port, () => {
  console.log(`Server up and listening on port ${port}`);
});
