import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  name: string;
  isEditing?: boolean; 
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: string = '';
  taskList: Task[] = [];

  addTask() {
    const trimmed = this.task.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id: this.taskList.length + 1,
      name: trimmed,
      isEditing: false
    };
    this.taskList.push(newTask);
    this.task = '';
    console.log('Task added:', this.taskList); 
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
    console.log('Task deleted, remaining:', this.taskList); 
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveTask(task: Task, newName: string) {
    const trimmed = newName.trim();
    if (trimmed) {
      task.name = trimmed;
    }
    task.isEditing = false;
  }

  cancelEdit(task: Task) {
    task.isEditing = false;
  }
}