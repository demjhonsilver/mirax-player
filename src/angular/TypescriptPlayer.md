```ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxplayer } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  miraxCustomizer = {
    playerTheme: "",
    progressTheme: ""
  };
  ngOnInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.videoPlayer.nativeElement) {
      miraxplayer(this.videoPlayer.nativeElement, this.miraxCustomizer);
    }
  }
}
```