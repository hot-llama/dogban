import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class BoardComponent {

  board: Object;

  constructor() {

    this.board = {
      count: [1, 5, 10],
      todo: [
        {
        "id": 1,
        "title": "Walk the dog",
        "description": "Take dog for walk in park",
        "tags": ["active", "basics"]
        }
      ],
      doing: [
        {
          "id": 1,
          "title": "Walk the dog",
          "description": "Take dog for walk in park",
          "tags": ["active", "basics"]
        },
        {
          "id": 2,
          "title": "Walk the dog",
          "description": "Take dog for walk in park",
          "tags": ["active", "basics"]
        }
      ],
      done: [
        {
          "id": 1,
          "title": "Walk the dog",
          "description": "Take dog for walk in park",
          "tags": ["active", "basics"]
        }
      ]
    };

  }

  moveTask(currentColumn, nextColumn) {

  }

}
