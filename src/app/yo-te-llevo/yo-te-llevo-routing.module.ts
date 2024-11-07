import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoTeLlevoPage } from './yo-te-llevo.page';

const routes: Routes = [
  {
    path: '',
    component: YoTeLlevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoTeLlevoPageRoutingModule {}
