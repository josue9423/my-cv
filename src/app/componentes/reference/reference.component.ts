import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  @Input("reference") reference : any;

  constructor() { }

  ngOnInit(): void {
  }

}
