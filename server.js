const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

var i = 0;
var arr = [];
app.get('/', (req, res) => {
	while (i < 10001) {
		arr.push(i);
		i++;
	}

	shuffle(arr);
	setOfNumbers = arr.toString();
	console.log(setOfNumbers);
	res.json({ message: `${setOfNumbers}` });
});

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
