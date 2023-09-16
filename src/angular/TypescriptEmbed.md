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
    miraxEmbed(this.embedVideo.nativeElement);
  }
}
```