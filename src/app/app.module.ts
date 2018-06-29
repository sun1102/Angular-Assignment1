import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularAssginmentComponent } from './components/angular-assginment/angular-assginment.component';
import { AssignmentService } from './services/assignment.service';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularAssginmentComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
