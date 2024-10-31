import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  headers = ["Index", "Date", "Location", "Reading", "Consumption"];

  // Define rows as an array of objects where keys are strings and values are strings
  rows: Array<Record<string, string>> = [
    {
      "Index": "1",
      "Date": "28/9/24",
      "Location": "Rooftop",
      "Reading": "0",
      "Consumption": "0"
    },
    {
      "Index": "2",
      "Date": "29/9/24",
      "Location": "Rooftop",
      "Reading": "100",
      "Consumption": "100"
    }
  ];
}
