// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var datetime = d3.select("#datetime");
var city = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {
    dataInput.forEach(ufo_data => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_data[column]))
        
    });
}

populate(data);

