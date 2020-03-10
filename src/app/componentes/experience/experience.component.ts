import { Component, OnInit } from '@angular/core';
import  *  as  json  from  '../../../assets/data/data.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  title : String = "EXPERIENCIA"
  data: any = (json as any).default;
  public isCollapsed = false

  constructor() { }

  ngOnInit(): void {
  }

}
