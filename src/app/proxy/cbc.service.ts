export interface CbcItem {
  name: string;
  minVal: number;
  maxVal: number;
  values: CbcItemVal[];
}

export interface CbcItemVal {
  date: string;
  value: number;
}
