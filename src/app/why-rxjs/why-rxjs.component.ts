import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-why-rxjs',
  templateUrl: './why-rxjs.component.html',
  styleUrls: ['./why-rxjs.component.scss']
})
export class WhyRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Rxjs Allows you to specify the dynamic behaviour of value completely at the time of declaration");
    this.dynamicRxjs();
  }
  dynamicRxjs(): any {
    var streamA = of(3,4);
    var streamB = streamA.pipe(map(a => 10*a));
    streamB.subscribe((val) => {
      console.log(val);
    })
  }

}
