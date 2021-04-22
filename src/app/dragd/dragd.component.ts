import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragd',
  templateUrl: './dragd.component.html',
  styleUrls: ['./dragd.component.css'],
})
export class DragdComponent {
  todo = [
    'Ir ao trabalho',
    'Ir para casa',
  ];

  done = [
    'Levantar',
    'Escovar os dentes',
    'Tomar banho',
    'Checar e-mail',
    'Passear com o cachorro'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
