'use strict';

const GreetingGenerator = require('./greetingGenerator');

document.getElementById('buttons').addEventListener('click', (e) => {
	let languageSelected;
	if (e.target.id === 'buttons'){
		languageSelected = 'english';
	} else {
		languageSelected = e.target.id;
	}
	document.getElementById('output').innerHTML = GreetingGenerator[languageSelected]();	
});


