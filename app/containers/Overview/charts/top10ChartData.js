// Build data for a classic pie chart
var data = {}

// Labels are displayed in component, quantities are calculated to define size of each slice
data.dataSet = []

// Colors for each slice
data.colors = ["#CF995F", "#628395", "#96897B", "#FF9F1C", "#832232", "#DBAD6A", "#70587C", "#329F5B", "2EC4B6"];

//Define the width of the svg element on the page
data.width = 870;

//Define the actual height(diameter) of the pie chart, this should not be larger than the width
data.height = 600;

//Define a class for the svg element for styling
data.arcClass = 'arc';

export default data;

