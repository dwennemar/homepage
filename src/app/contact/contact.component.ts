import {Component, OnInit} from '@angular/core';
import {faDev, faGithub, faGitlab, faLinkedin, faMedium, faXing} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  github = faGithub;
  gitlab = faGitlab;
  linkedin = faLinkedin;
  xing = faXing;
  dev = faDev;
  medium = faMedium;

  constructor() {
  }

  ngOnInit(): void {
  }

}
