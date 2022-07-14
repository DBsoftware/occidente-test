import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayInfoComponent } from './display-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayInfoComponent],
  exports: [DisplayInfoComponent],
})
export class DisplayInfoModule { }
