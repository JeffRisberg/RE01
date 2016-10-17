/**
 * Serves the application to the browser
 */
var path = require('path');
var express = require('express');
var app = express();

const PATH_STYLES = path.resolve(__dirname, 'app/styles');
const PATH_DIST = path.resolve(__dirname, 'dist');

app.use('/styles', express.static(PATH_STYLES));
app.use(express.static(PATH_DIST));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app/index.html'));
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
    console.log('Server is listening at %s', app.get('port'));
});

