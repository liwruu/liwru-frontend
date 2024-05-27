const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loanController = require('./controllers/loanController');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.put('/renew-loan/:id', loanController.renewLoan);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
