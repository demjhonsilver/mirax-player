```ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxEmbed } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('embedVideo', { static: true }) embedVideo!: ElementRef;
  constructor() { }
  ngOnInit(): void {
    const youtubeParams = {
      playerVars: {
        controls: 1,
        autoplay: 0,
        fs: 1,
        iv_load_policy: 3,
        cc_load_policy: 1
      }
    };
    const vimeoParams = {
      autopause: 0,
      controls: true,
      responsive: true 
    };
    miraxEmbed(this.embedVideo.nativeElement, youtubeParams, vimeoParams);
  }
}
```