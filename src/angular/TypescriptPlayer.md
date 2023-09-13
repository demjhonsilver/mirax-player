```ts
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { miraxplayer } from 'mirax-player';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.videoPlayer.nativeElement) {
      miraxplayer(this.videoPlayer.nativeElement);
    }
  }
}
```