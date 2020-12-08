import { Component, OnInit } from '@angular/core';
import { ComponentLookup } from '../dynamic/dynamic.component';

@ComponentLookup('test')
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
