// receive users name,
//5 yes or no questions they can ask of me with upperCase and lowerCase,
//tell user after each answer if they were right,
//console messages for each,
//add an if/else for a sixth question if the 5th question is correct,

var userName = prompt('Hello, friend!  Tell me your name so I don\'t have to keep calling you \'friend\'!');
console.log('User inputs their name.');

alert('Okay, ' + userName + '! I\'m going to ask you some questions so you can get to know me.');
console.log('Telling user what we will be doing.');

var fromSeattle = prompt('Did I grow up in Seattle?  Yes or no?');
if (fromSeattle.toUpperCase() === 'YES') {
  alert('That is correct!  Although technically I grew up in Mill Creek, about 20 miles North of Seattle.');
} else {
  alert('Incorrect!  I grew up in Mill Creek, 20 miles North of downtown Seattle.  But I still say I grew up in Seattle!!');
}
console.log('User guesses if I grew up in Seattle or not.')

var inLosAngeles = prompt('Did I live in Los Angeles?  Yes or no?');
if (inLosAngeles.toUpperCase() === 'YES'){
  alert ('You are right!  I lived there for 15 years.');
} else {
  alert('Nope!  I lived in the City of Angels for 15 years.');
}
console.log('User guesses if I lived in Los Angeles.');
