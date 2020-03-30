import { Component, OnInit } from '@angular/core';
import  *  as  json  from  '../../../assets/data/data.json';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  title : String = "CERTIFICADOS"
  data: any = (json as any).default;
  public isCollapsed = false
  
  constructor() { }

  ngOnInit(): void {
  }

}
