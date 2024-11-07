import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { YoTeLlevoPageRoutingModule } from './yo-te-llevo-routing.module';
import { YoTeLlevoPage } from './yo-te-llevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoTeLlevoPageRoutingModule
  ],
  declarations: [YoTeLlevoPage]
})
export class YoTeLlevoPageModule {}
