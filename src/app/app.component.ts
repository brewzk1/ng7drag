import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data1 = ['apple', 'banana', 'cherry'];
  data2 = ['grape', 'jackfruit', 'mango'];

  addToData2(event: CdkDragDrop<string>) {
    console.log(event);
    this.data2.splice(event.currentIndex, 0, this.data1[event.previousIndex]).join();
    //TODO add remove from old array function
  }
}
