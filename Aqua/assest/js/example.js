google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Region', 'Cubic Meters'],
  ['Дунавски район', 950],
  ['Черноморски район', 600],
  ['Източнобеломорски район', 1050],
  ['Западнобеломорски район', 192]
]);
  var options = {'title':'Водни ресурси на България', 'width':550, 'height':400};
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}