import { Component } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  langs = [
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'French',
      value: 'fr',
    },
    {
      label: 'English',
      value: 'en',
    },
  ];
  constructor(public translationService: TranslationService) {}
}
