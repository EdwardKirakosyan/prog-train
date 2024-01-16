import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
  DoCheck, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() value: string = 'wsap'

  constructor() {
    console.log('con called')
    console.log(this.value)
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ssssssss')
    console.log(change)
  }

  ngOnInit() {
    console.log('ngcaled')
    console.log(this.value)
  }

  ngDoCheck() {
    console.log('sssDo')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }
}
