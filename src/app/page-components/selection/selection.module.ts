import { SelectionsComponent } from './selections/selections.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionComponent } from './selection.component';

@NgModule({
  imports: [
    CommonModule,
    NgbNavModule

  ],
  declarations: [SelectionComponent, SelectionsComponent
  ],
  exports: [SelectionComponent,SelectionsComponent],
})
export class SelectionModule { }
