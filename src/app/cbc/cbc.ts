import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CbcItemChart } from './cbc-item-chart/cbc-item-chart';
import { CbcItem } from '../proxy/cbc.service';

@Component({
  selector: 'app-cbc',
  imports: [
    CbcItemChart
  ],
  templateUrl: './cbc.html',
  styleUrl: './cbc.scss'
})
export class Cbc implements OnInit {

  clicked: number = 0;
  cbcItems: CbcItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSampleData();
  }

  getSampleData() {
    this.http.get<CbcItem[]>('./assets/data.json').subscribe(data => {
      this.cbcItems = data;
    });
  } 

  increment() {
    this.clicked++;
  }
}
