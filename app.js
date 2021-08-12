const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send("hello World!");
});

app.get('/demo', (req,res) => {
	res.set('we-be-custom', '4life');
	res.status(418);
	res.send('zen-zone');
});
	
app.listen(port, () => console.log(`example app listening on port ${port})!`));
