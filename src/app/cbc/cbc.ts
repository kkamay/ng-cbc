import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cbc',
  imports: [],
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

interface CbcItem {
  name: string;
  minVal: number;
  maxVal: number;
  values: CbcItemVal[];
}

interface CbcItemVal {
  date: string;
  value: number;
}
