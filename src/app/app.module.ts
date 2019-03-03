import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//cli: npm add @angular/cdk
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
