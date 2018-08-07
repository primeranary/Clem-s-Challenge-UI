import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevelonePage } from './levelone';

@NgModule({
  declarations: [
    LevelonePage,
  ],
  imports: [
    IonicPageModule.forChild(LevelonePage),
  ],
})
export class LevelonePageModule {}
