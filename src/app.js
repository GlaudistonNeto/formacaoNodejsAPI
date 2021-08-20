const express = require('express');
const app = express();
const router = require("./routes/routes");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/', router);

app.listen(8686, () => {
  console.log("Server running on port 8686");
});
