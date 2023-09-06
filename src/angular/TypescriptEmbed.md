```ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxEmbed } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('embedVideoRef', { static: true }) embedVideoRef!: ElementRef;
  constructor() { }
  ngOnInit(): void {
    const youtubeParams = {
      width: 1000,
      height: 660,
      playerVars: {
        controls: 1,
        autoplay: 0,
        fs: 1,
        iv_load_policy: 3,
        cc_load_policy: 1
      },
      events: { onReady: this.embedPlayerReady.bind(this) }
    };
    const vimeoParams = {
      width: 1000,
      height: 660,
      autopause: 0,
      controls: true,
      responsive: true 
    };
    miraxEmbed(this.embedVideoRef.nativeElement, youtubeParams, vimeoParams);
  }
  embedPlayerReady(event: any): void {
    event.target.playVideo();
  }
}
```