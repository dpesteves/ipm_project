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
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: ""
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: "JAN" },
				{ y: 55, label: "FEV" },
				{ y: 50, label: "MAR" },
				{ y: 65, label: "ABR" },
				{ y: 95, label: "MAI" },
				{ y: 68, label: "JUN" },
				{ y: 28, label: "JUL" },
				{ y: 34, label: "AGO" },
				{ y: 50, label: "SET" },
				{ y: 14, label: "OUT" },
				{ y: 37, label: "NOV" },
				{ y: 14, label: "DEZ" }
			]
		}]
	});
		
	chart.render();
    }
}