import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CbcItem } from '../../proxy/cbc.service';

@Component({
  selector: 'app-cbc-item-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './cbc-item-chart.html',
  styleUrl: './cbc-item-chart.scss'
})
export class CbcItemChart implements OnInit {

  @Input() cbcItem: CbcItem | null = null;

  chartData: ChartConfiguration['data'] | null = null;

  constructor() { }

  ngOnInit(): void {
    this.prepareChart();
  }

  prepareChart() {
    const cbcData: any[] = [];
    const labels: any[] = [];

    this.cbcItem?.values.forEach(item => {
      cbcData.push(item.value);
      labels.push(item.date);
    });

    this.chartData = {
      datasets: [
        {
          data: cbcData,
          label: `${this.cbcItem?.name} (${this.cbcItem?.minVal} - ${this.cbcItem?.maxVal})`
        }
      ],
      labels: labels
    };
  }
}
