import { Component, OnInit } from '@angular/core';
import  *  as  json  from  '../../../assets/data/data.json';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {

  data: any = (json as any).default;

  constructor() { }

  ngOnInit(): void {
    
  }

}
