// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 30
        },
        {
            title: 'Rent',
            budget: 300
        },
        {
            title: 'Grocery',
            budget: 100
        },
    ]
};


app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});