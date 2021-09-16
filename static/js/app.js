// from data.js
// var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var datetime = d3.select("#datetime");
var city = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {
    tbody.html("");
    dataInput.forEach(ufo_data => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_data[column]))
        
    });



}

populate(data);

function handleClick() {
    var userdate = d3.select("#datetime").property("value");
    var filteredData = data;


    console.log("A button was clicked!");
      // We can use d3 to see the object that dispatched the event
    
    console.log(d3.event.target.value);
    console.log(userdate);

    // check for user date
    if(userdate) {
        // filter data
        filteredData = filteredData.filter(row => row.datetime == userdate);
        console.log(filteredData);

    }

    populate(filteredData);
}


// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

