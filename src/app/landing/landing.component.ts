import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private scroller: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  public onClick(element: string) {
    this.scroller.scrollToAnchor(element)
  }
}
