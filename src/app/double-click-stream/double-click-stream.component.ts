import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { throttle, buffer, map, filter, debounce, exhaustMap, take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-double-click-stream',
  templateUrl: './double-click-stream.component.html',
  styleUrls: ['./double-click-stream.component.scss']
})
export class DoubleClickStreamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getDoubleClick();
  }

  getDoubleClick() {
    /*var button = document.querySelector('.button');
    var label = document.querySelector('h4');
    var clickStream = fromEvent(button, 'click');
    var doubleClickStream = clickStream
          .pipe(buffer(() => clickStream.throttle(_val => interval(250)))
          ,map(arr => arr.length)
          ,filter(len => len === 2))

    doubleClickStream.subscribe(event => {
      console.log("Inside doubleClick",event);

      label.textContent = 'Double Click';
    });

    doubleClickStream
        .pipe(throttle(_val => interval(1000)))
        .subscribe((_suggestion) =>{
          label.textContent = '-';
        })*/

    // ---------------------------------------------------

    /*  console.log('started')
      const button = document.querySelector('.button')
      const label = document.querySelector('h4')
  
      const click$ = fromEvent(button, 'click')
  
      const doubleClick$ = click$.buffer(() => click$.pipe(debounce(250)))
        .map(arr => arr.length)
        .filter(len => len === 2)
  
      doubleClick$.subscribe(() => {
        label.textContent = 'double clicked !'
      })
      doubleClick$.debounce(1000).subscribe(() => {
        label.textContent = '-'
      })*/
    
    var button = document.querySelector('.button');
    var label = document.querySelector('h4');
    const clicks = fromEvent(button, 'click');
    const doubleclicks$ = clicks.pipe(exhaustMap(() =>
      clicks.pipe(take(1),takeUntil(interval(250)))
    ));

    doubleclicks$.subscribe((val) => {
      console.log(val);     
      label.textContent = 'double clicked !'
    })

    // const debounced = doubleclicks$.pipe(debounce(() => timer(1000)));

    doubleclicks$.pipe(debounce(() => timer(1000))).subscribe((val) => {
      console.log(val);
      label.textContent = '-'
    })
  }

}
