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
// Get the value property of the input element
var inputValue = inputElement.property("value");
    console.log(inputValue);

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
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

});

