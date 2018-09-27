import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, map, filter, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.nonReactive();
    this.reactive()
  }

  reactive(): any {
    console.clear();
    var source = interval(400);
    var example = source.pipe(take(8),
        map(i => ['11','33','67','ndmsms','jwehjwhe','77','89','3'][i]));
    var result = example.pipe(
      map(x => parseInt(x)),
      filter(x => !isNaN(x)),
      reduce((x, y) => x + y) 
    )
    const subscribed = result.subscribe((x) => console.log(x));
  }
  nonReactive(): any {
    console.clear();
    var source = ['1', '2','4', '5','foo', 'bar', '53','32','67', '78'];
    var result = source
          .map(x => parseInt(x))
          .filter(x => !isNaN(x))
          .reduce((x, y) => x + y);
    console.log(result);
  }

}
