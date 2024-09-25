import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent implements AfterViewInit{

  public dataSource = {
    datasets: [
      {
        data: [] as any,
        backgroundColor: [
          '#413c58',
          '#a3c4bc',
          '#BFD7B5',
          '#E7EFC5',
          '#F2DDA4',
          '#DAB49D',
          '#c9c19f'
        ]
      }
    ],
    labels: [] as any,
  };

 constructor(private http: HttpClient) {}

 canvas: any;
 ctx: any;

 createChart() {
  this.canvas = document.getElementById('myChart');
  this.ctx = this.canvas.getContext('2d');
  let chart = new Chart(this.ctx, {
      type: 'pie',
      data: this.dataSource
  });
}

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) =>{
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
    }
    this.createChart();
    });
  }

}
