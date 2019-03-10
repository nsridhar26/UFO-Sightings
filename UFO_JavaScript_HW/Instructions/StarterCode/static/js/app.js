// Select the button
var button = d3.select("#filter-btn");

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// prints all of the information in the browser
 data.forEach(function(ufoSightings){
    console.log(ufoSightings);
    var row=tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
// this is the part that clicks the button and filters results
button.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
// var inputElement = d3.select("#city");
// Get the value property of the input element

var inputValue = inputElement.property("value");
    console.log(inputValue);
    // if (inputValue== "datetime"){
//   data.forEach(function())
 var filteredData = tableData.filter(row => row.datetime === inputValue);
  
 console.log(filteredData);
//  var data=filteredData;

// First, clear out any existing data
tbody.html("");
filteredData.forEach(function(ufoSitings){
    console.log(ufoSitings);
    var row=tbody.append("tr");

    Object.entries(ufoSitings).forEach(function([key, value]){
    //     if (key === "datetime") {
    //         datetime.push(value);
    //       }
    //       else {
    //         city.push(value);
    //       }
    //      });
    //   });
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// };
});

// create empty arrays for each key in the UFO data

// var datetime =[];
// var city =[];
// var state =[];
// var shape =[];

// // iterate through each key and value

// // Create a custom filtering function
// function selectCity(name) {
//     return name.city == inputValue;
//   }
  
// filter() uses the custom function as its argument
//   var city = tableData.filter(city);
  
//   // Test
//   console.log(city);