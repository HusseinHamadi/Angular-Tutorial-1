import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get selectedTasks() {
    return this.taskService.getUserTasks(this.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
