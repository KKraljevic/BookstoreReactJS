// Build data for a classic pie chart
var data = {}

// Labels are displayed in component, quantities are calculated to define size of each slice
data.dataSet = []

// Colors for each slice
data.colors = ["#ED6A5A", "#F4F1BB", "#9BC1BC", "#5CA4A9", "#E6EBE0", "#70587C"];

//Define the width of the svg element on the page
data.width = 670;

//Define the actual height(diameter) of the pie chart, this should not be larger than the width
data.height = 300;

//Define a class for the svg element for styling
data.arcClass = 'arc';

export default data;

