import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies-info',
  templateUrl: './studies-info.component.html',
  styleUrls: ['./studies-info.component.scss']
})
export class StudiesInfoComponent implements OnInit {

  constructor() { }

  @Input() img="";
  @Input() title="";
  @Input() subtitle="";
  @Input() href="";



  ngOnInit(): void {
  }

}
