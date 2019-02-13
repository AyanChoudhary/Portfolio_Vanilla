var chart;
window.onload = function() 
{


chart = new CanvasJS.Chart("chart", {
	animationEnabled: true,
	width: window.innerWidth,
	title:{
		text: "Programming Languages Known",
		horizontalAlign: "center"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 50, label: "HTML" },
			{ y: 50, label: "CSS" },
			{ y: 50, label: "Javascript" },
			{ y: 5, label: "Python"},
			{ y: 70, label: "C++"},
			{ y: 70, label: "Java"}
		]
	}]
});
// setTimeout(_ => chart.render(), 3000)
chart.render();
}
