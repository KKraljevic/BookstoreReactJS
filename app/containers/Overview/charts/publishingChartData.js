var data = {}

// Labels are displayed in component, quantities are calculated to define size of each slice
data.dataSet = []

//Set margins for bar graph within svg element
data.margins = { top: 20, right: 20, bottom: 70, left: 40 };

//Define label of y-axis x-axis
data.yAxisLabel = 'Number of Books';
data.xAxisLabel = 'Publishing Date';

// Colors are optional for each bar
// If colors are not given, bars will default to 'steelblue'
data.fill = [];

//Define the width of the svg element on the page
data.width = 670;

//Define the height of the bar chart
data.height = 200;

// Define tick intervals for y-axis
data.ticks = 10;

data.fill['lemonChiffon', 'aliceblue', 'sandybrown', 'darksalmon']


export default data;

