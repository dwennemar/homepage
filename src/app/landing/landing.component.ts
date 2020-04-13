import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  skillSet = ['Angular', 'Java', 'UI-Design'];
  txt = this.skillSet[0];
  skillIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.switchTxt();
  }

  switchTxt() {
    interval(1600).subscribe((val) => {
      if(this.skillIndex >= this.skillSet.length) {
        this.skillIndex = 0;
      }
      this.txt =this.skillSet[this.skillIndex];
      this.skillIndex++;
    });
  }
}
