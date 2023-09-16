```ts
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { miraxPlayer } from 'mirax-player';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.initializemiraxPlayer();
  }
  initializemiraxPlayer() {
    if (this.videoPlayer.nativeElement) {
      miraxPlayer(this.videoPlayer.nativeElement);
    }
  }
}
```