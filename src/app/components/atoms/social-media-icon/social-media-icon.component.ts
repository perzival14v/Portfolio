import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.scss']
})
export class SocialMediaIconComponent implements OnInit {

  constructor() { }

  @Input() name=""
  @Input() src=""
  @Input() href=""

  ngOnInit(): void {
  }

}
