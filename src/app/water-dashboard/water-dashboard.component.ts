import { Component } from '@angular/core';
import {Chart ,registerables} from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-water-dashboard',
  templateUrl: './water-dashboard.component.html',
  styleUrl: './water-dashboard.component.css'
})
export class WaterDashboardComponent {
  
  
  public config: any = {
    type: 'bar',
    
    data: {
      labels: ['1','2','3','4','5','6','7'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false, // Prevent automatic scaling
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  

  chart:any;
  ngOnInit():void{
    this.chart =new Chart('MyChart', this.config);
  }

}
