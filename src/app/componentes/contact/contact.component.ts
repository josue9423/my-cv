import { Component, OnInit } from '@angular/core';
import *  as  json from '../../../assets/data/data.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data: any = (json as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
