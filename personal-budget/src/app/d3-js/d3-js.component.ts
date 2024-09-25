import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';

@Component({
  selector: 'pb-d3-js',
  templateUrl: './d3-js.component.html',
  styleUrl: './d3-js.component.scss'
})
export class D3JSComponent implements OnInit{

  constructor(private http: HttpClient) {}

  newData() {
    return this.http.get('http://localhost:3000/budget').toPromise();
  }

  async createD3chart(){
    let response: any = await this.newData();
    let bData = response.myBudget;
    let chart2 = document.getElementById('D3');
    let width = 400;
    let height = 400;
    let radius = Math.min(width, height) / 2;
    let color = d3.scaleOrdinal<string>()
    .domain(bData.map((d: any) => d.budget.toString()))
    .range(["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]);

    let svg = d3.select(chart2)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let pie = d3.pie<any>().sort(null).value((d: any) => Number(d.budget));

    let arc = d3.arc<d3.PieArcDatum<any>>()
    .outerRadius(radius * 0.9)
    .innerRadius(radius * 0.4);

    let outerArc = svg.selectAll("arc")
    .data(pie(bData))
    .enter()
    .append("g")
    .attr("class", "arc");

    outerArc.append("path")
    .attr("d", (d) => (arc(d) as string))
    .attr("fill", (d:d3.PieArcDatum<any>) => color(d.data.budget.toString()));
    outerArc.append("text")
    .attr("transform", function (d) {
        let pos = arc.centroid(d as any);
        return `translate(${pos[0]}, ${pos[1]})`;
    })
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .text(function (d) {
        return d.data.title + ": " + d.data.budget;
    });
  }

  ngOnInit(): void {
    this.newData();
    this.createD3chart();
  }

}
