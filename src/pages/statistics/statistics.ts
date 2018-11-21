import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Chart from 'chart.js'

/*interface xAxes {
  time: string
}

interface yAxes {
  amount: number
} */

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html'
})
export class StatisticsPage {

  LineChart : any;

  constructor(public navCtrl: NavController) {
  
  }

  createChart(){
    this.LineChart = new Chart('lineChart', {
      type : 'line',
      data:{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: 'number of amount spend',
          data: [9, 7, 3, 5, 2, 10],
          fill: false,
          lineTension: 0.2,
          borderColor:"red",
          borderWidth:1
         
          }]
      },
  });
}
  

}
