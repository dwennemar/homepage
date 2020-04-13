import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {faAngular, faJava} from '@fortawesome/free-brands-svg-icons';
import {faFire, faLeaf, faPaintBrush} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  skillSet = [
    {name: 'Angular', icon:  faAngular},
    {name: 'Firebase', icon: faFire},
    {name: 'Java', icon: faJava},
    {name: 'Spring', icon: faLeaf},
    {name: 'UI-Design', icon: faPaintBrush}
  ];
  txt = this.skillSet[0];
  skillIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.switchTxt();
  }

  switchTxt() {
    interval(2000).subscribe((val) => {
      if(this.skillIndex >= this.skillSet.length) {
        this.skillIndex = 0;
      }
      this.txt =this.skillSet[this.skillIndex];
      this.skillIndex++;
    });
  }
}
