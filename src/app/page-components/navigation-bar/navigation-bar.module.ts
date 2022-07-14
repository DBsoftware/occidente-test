import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, NgbNavModule
  ],
  declarations: [NavigationBarComponent],
  exports: [NavigationBarComponent]
})
export class NavigationBarModule { }
