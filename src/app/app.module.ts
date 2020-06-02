import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { authorComponent } from './authors.components';
import {AuthorsService} from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    authorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //CoursesService
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
