import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { Category } from '../model/Category';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public show = false;
  public deletedTask: string;
  public taskList: Task[] = [];
  public doneList: Task[] = [];
  public resultSearchedList: Task[] = [];
  public task: Task[] = [];
  public categories = [];
  public taskId: number;

  constructor(private modalService: NgbModal) {}

  addTask(
    name: string,
    description: string,
    priority: string,
    category: string,
    isdone: boolean
  ): any {
    const task = new Task(name, description, priority, category, isdone);
    this.taskList.push(task);
    this.task.push(task);
    console.log(this.taskList);
  }

  addCategorie(category: Category): void {
    this.categories.push(category);
  }

  done(index: number): void {
    const doneTask = this.taskList[index];
    this.taskList.splice(index, 1);
    console.log(index);
    this.doneList.push(doneTask);
    doneTask.isDone = true;
  }

  undone(index: number): void {
    const undoneTask = this.doneList[index];
    this.doneList.splice(index, 1);
    console.log(index);
    this.taskList.push(undoneTask);
    undoneTask.isDone = false;
  }

  openEditModal(taskId: number): void {
    // const editT = this.taskList[taskId-1];
    this.modalService.open(EditTaskComponent);
    this.taskId = taskId;
  }

  edit(
    taskId: number,
    name: string,
    description: string,
    priority: string,
    category: string
  ): void {
    this.task[taskId].name = name;
    this.task[taskId].description = description;
    this.task[taskId].priority = priority;
    this.task[taskId].category = category;
  }

  delete(index: number): boolean {
    const doneTask = this.taskList[index];
    if (doneTask) {
      this.taskList.splice(index, 1);
      this.deletedTask = doneTask.name;
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.deletedTask = '';
      }, 5000);
      return true;
    } else {
      return false;
    }
  }

  searchTasks(text: string): void {
    this.resultSearchedList = [];
    const mergedListForSearching: Task[] = [...this.taskList, ...this.doneList];
    if (text !== undefined && text !== '') {
      const searchText: string = text.toLocaleUpperCase();
      for (const task of mergedListForSearching) {
        if (task.name !== undefined && task.name.toLocaleUpperCase().includes(searchText)) {
          this.resultSearchedList.push(task);
        } else if (task.category !== undefined && task.category.toLocaleUpperCase().includes(searchText)) {
          this.resultSearchedList.push(task);
        } else if (task.description !== undefined && task.description.toLocaleUpperCase().includes(searchText)) {
          this.resultSearchedList.push(task);
        } else if (task.priority !== undefined && task.priority.toLocaleUpperCase().includes(searchText)) {
          this.resultSearchedList.push(task);
        }
      }
    }
  }
}
