const express = require('express');
const path = require('path');

const {PORT = 3000} = process.env;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});