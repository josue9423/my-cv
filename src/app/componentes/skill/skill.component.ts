import { Component, OnInit } from '@angular/core';
import  *  as  json  from  '../../../assets/data/data.json';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  title : String = "SKILLS"
  data: any = (json as any).default
  public isCollapsed = false

  constructor() { }

  ngOnInit(): void {
  }

}
