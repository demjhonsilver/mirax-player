```ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxplayer } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;
  miraxCustomizer = {
    playerTheme: "rgba(228, 41, 82, 0.3)",
    progressTheme: "yellow"
  };
  ngOnInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.video.nativeElement) {
      miraxplayer(this.video.nativeElement, this.miraxCustomizer);
    }
  }
}
```