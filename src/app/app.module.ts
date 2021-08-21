import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AddHackIdeasComponent } from './add-hack-ideas/add-hack-ideas.component';
import { HackChallengesComponent } from './hack-challenges/hack-challenges.component';
import { TagRelatedDirective } from './common/directive/tag-related.directive';
import { TagRelatedComponent } from './tag-related/tag-related.component';
import { SortPipe } from './common/pipe/sort-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeLoginComponent,
    AddHackIdeasComponent,
    HackChallengesComponent,
    TagRelatedDirective,
    TagRelatedComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
