import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { LivePreviewComponent } from './components/live-preview/live-preview.component';
import { MainComponent } from './components/main/main.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslationService } from './services/translation.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactComponent } from './components/contact/contact.component';
export function translationInitializer(translationService: TranslationService) {
  return function () {
    return translationService.init('ar');
  };
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FooterComponent,
    LivePreviewComponent,
    MainComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translationInitializer,
      deps: [TranslationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
