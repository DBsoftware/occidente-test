import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarModule } from './page-components/navigation-bar/navigation-bar.module';
import { DisplayInfoModule } from './page-components/display-info/display-info.module';
import { SelectionModule } from './page-components/selection/selection.module';
import { AlertModule } from './page-components/alert/alert.module';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationBarModule,
    DisplayInfoModule,
    SelectionModule,
    AlertModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
