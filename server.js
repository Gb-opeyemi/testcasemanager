const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('TestCase Manager running');
});

app.listen(PORT, () => {
    console.log(`TestCase Manager listening on http://localhost:${PORT}`);
});