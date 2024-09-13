const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/create', (req, res) => {
  const {name, email} = req.body;

  const isSuccess = Boolean(name && email);

  res.json({
    isSuccess,
    message: isSuccess
      ? 'Data received successfully!'
      : 'Failed to receive data',
    data: isSuccess ? {name, email} : null,
  });
});

app.listen(port, () => {
  console.log(`Mock server running on http://localhost:${port}`);
});
