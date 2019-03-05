import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    original_todo = [
        'Get to work',
        'Pick up groceries',
        'Go home', 'Fall asleep'
    ];

    original_done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

    todo = Array.from(this.original_todo);
    done = Array.from(this.original_done);

    drop(event: CdkDragDrop<string[]>) {

        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }

    }

    resetLists() {
        this.todo = Array.from(this.original_todo);
        this.done = Array.from(this.original_done);
    }

}
