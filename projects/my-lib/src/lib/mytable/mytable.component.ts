import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {

  @Input() data?;

  constructor() { }

  ngOnInit() {
   console.log('my component works');
  }

}
