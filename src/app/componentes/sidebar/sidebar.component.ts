import { Component, OnInit } from '@angular/core';
import  *  as  json  from  '../../../assets/data/data.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  data: any = (json as any).default;
  
  constructor() { }

  ngOnInit(): void {
  }

}
