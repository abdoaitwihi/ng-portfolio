import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-live-preview',
  templateUrl: './live-preview.component.html',
  styleUrls: ['./live-preview.component.scss'],
})
export class LivePreviewComponent {
  src!: SafeUrl;
  constructor(private router: ActivatedRoute, private sanitizer: DomSanitizer) {
    let { link } = this.router.snapshot.queryParams;
    this.src = sanitizer.bypassSecurityTrustResourceUrl(link);
    console.log(link);
  }
}
