const express = require('express');

const app = express();

const path = require('path');

const port = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.join(publicPath, 'index.html'));
    })
// }

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Server is up on ${port}`);
});