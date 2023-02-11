import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivePreviewComponent } from './components/live-preview/live-preview.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'live-preview',
    component: LivePreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
