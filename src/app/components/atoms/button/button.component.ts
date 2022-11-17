import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {

  @Input() text = "Default button"

  @Input() link = ""

  @Input() accion(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
