```ts
import { Component, OnInit } from '@angular/core';
import { embed } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    embed('mirax-embed');
  }
}
```