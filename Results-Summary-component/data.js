//Inside summary class
//  All of these are class pill
//      Reaction
//      Memory
//      Verabl
//      Visual
//every id has it's own div that contains every json data
//category
//score
//icon


// var data = require('./data.json')
// //import data from './data.json'
// for (var i = 0; i < data.length; i++) {
//     var obj = data[i];

//     var idDiv = document.getElementById(obj.category)

//     // Access the elements inside the "id" div
//     var imgElement = idDiv.querySelector("img");
//     var categoryElement = idDiv.querySelector(".category");
//     var scoreElement = idDiv.querySelector(".score");

//     categoryElement.textContent = `${obj.category}`;
//     scoreElement.textContent = `${obj.score}`;
//     imgElement.src = `${obj.icon}`;


// }


var jsonUrl = './data.json';

// Use the fetch API to load the JSON file
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        // Process the data once it's loaded
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];

            var idDiv = document.getElementById(obj.category);

            // Access the elements inside the "id" div
            var imgElement = idDiv.querySelector("img");
            var categoryElement = idDiv.querySelector(".category");
            var scoreElement = idDiv.querySelector(".score");

            categoryElement.textContent = `${obj.category}`;
            scoreElement.textContent = `${obj.score}`;
            imgElement.src = `${obj.icon}`;
        }
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

//let element = document.getElementById(obj.category).getElementsByTagName('p')[0]
// var idDiv = document.getElementById();



