/*app.component.ts*/
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from "c:/Users/andre/OneDrive/Ambiente de Trabalho/IPM_CODE/ipm_project/node_modules/canvasjs/dist/canvasjs.min";
//var CanvasJS = require('./canvasjs.min');
 
@Component({
	selector: 'page-statistics',
	templateUrl: 'statistics.html'
})
 
export class AppComponent implements OnInit {
	ngOnInit() {
	let chart = new CanvasJS.Chart("chartContainer", {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Yearly Expense"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: [
				{ y: 750, name: "Pingo Doce" },
				{ y: 800, name: "Continente" },
				{ y: 555, name: "Lidl" },
				{ y: 300, name: "Intermache" }
			]
		}]
	});
		
	chart.render();
    }
}