```ts
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { miraxPlayer } from 'mirax-player';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('playerDiv', { static: true }) playerDiv!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.initializemiraxPlayer();
  }
  initializemiraxPlayer() {
      miraxPlayer(this.playerDiv.nativeElement);
  }
}
```