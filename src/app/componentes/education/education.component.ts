import { Component, OnInit } from '@angular/core';
import  *  as  json  from  '../../../assets/data/data.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  title : String = "EDUCACIÓN"
  data: any = (json as any).default;
  public isCollapsed = false
  
  constructor() { }

  ngOnInit(): void {
  }

}
