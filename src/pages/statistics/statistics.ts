import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Chart from 'chart.js'

var ctx = document.getElementById("myChart");

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
  PieChart : any;
  Chart : any;
  constructor(public navCtrl: NavController) {
  
  }


  createLineChart(){
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


createPieChart(){
  this.PieChart = new Chart("pieChart" , {
    type: 'pie',
    data: {
      labels:["Pingo doce", "Continente", "Lidl"],
      datasets: [{
        label : "amount payed",
        data: [250,300,400],
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
        ],
        borderWidth: 1
      }]
    },
    options: {
      title:{
        text: "Pie Chart",
        display:true
      },
      responsive: false,
    }
  });
}


}
