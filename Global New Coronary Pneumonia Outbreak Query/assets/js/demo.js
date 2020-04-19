Circles.create({
	id: 'task-complete',
	radius: 75,
	value: 80,
	maxValue: 100,
	width: 8,
	text: function(value) {
		return value + '%';
	},
	colors: ['#eee', '#1D62F0'],
	duration: 400,
	wrpClass: 'circles-wrp',
	textClass: 'circles-text',
	styleWrapper: true,
	styleText: true
})

$.notify({
	icon: 'la la-sun-o',
	title: '《生于忧患，死于安乐》',
	message: '天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能，',
}, {
	type: 'info',
	placement: {
		from: "bottom",
		align: "left"
	},
	time: 1000,
});

// trafficChart
var chart = new Chartist.Line('#trafficChart', {
	labels: [1, 2, 3, 4, 5, 6, 7],
	series: [
		[5, 9, 7, 8, 5, 3, 5],
		[6, 9, 5, 10, 2, 3, 7],
		[2, 7, 4, 10, 7, 6, 2]
	]
}, {
	plugins: [
		Chartist.plugins.tooltip()
	],
	low: 0,
	height: "245px",
});

// salesChart
var dataSales = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	series: [
		[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
		[3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
	]
}

var optionChartSales = {
	plugins: [
		Chartist.plugins.tooltip()
	],
	seriesBarDistance: 10,
	axisX: {
		showGrid: false
	},
	height: "245px",
}

var responsiveChartSales = [
	['screen and (max-width: 640px)', {
		seriesBarDistance: 5,
		axisX: {
			labelInterpolationFnc: function(value) {
				return value[0];
			}
		}
	}]
];

Chartist.Bar('#salesChart', dataSales, optionChartSales, responsiveChartSales);
