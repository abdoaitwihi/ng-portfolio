import { Component, OnInit } from '@angular/core';

interface Theme {
  image: String;
  link: String;
}

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss'],
})
export class SecondSectionComponent implements OnInit {
  imageTop = '0';

  themes: Theme[] = [];

  constructor() {}
  ngOnInit(): void {
    console.log('hello ');
    fetch('/assets/data/data.json')
      .then((res) => res.json())
      .then((res) => {
        this.themes = res;
      });
  }

  onMouseEnter(img: HTMLImageElement) {
    const imageHeight = img.offsetHeight;
    // this.imageTop = `-${imageHeight}px`;
    img.style.top = `-${imageHeight - 300}px`;
  }

  onMouseLeave(img: HTMLImageElement) {
    this.imageTop = '0';
    img.style.top = `0px`;
  }
}
