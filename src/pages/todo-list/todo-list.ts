import { Component } from '@angular/core';
import { TodoItem } from '../../common/model/todo'
import { ToastController, NavController } from 'ionic-angular';
import { EditTodoPage } from "../edit-todo/edit-todo";
import { AddTodoPage } from "../add-todo/add-todo";
import { TodoItemService } from "../../common/services/todoItemService";
import _ from "lodash"

@Component({
  selector: 'page-todo-list',
  templateUrl: './todo-list.html'
})
export class TodoListPage {
  todoList: Array<TodoItem>
  isEditMode: boolean

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private todoItemService: TodoItemService) {
    todoItemService.getTodoList().then(todoList => {
      this.todoList = todoList
    })
  }

  public switchEditMode() {
    this.isEditMode = !this.isEditMode
  }

  public toggleDone(todoItem) {
    this.todoItemService.toggleDone(todoItem)
  }

  public deleteTodo(id) {
    this.todoItemService.remove(id)
      .then(() => {
        let removedTooItems = _.remove(this.todoList, (todoItem: TodoItem) => todoItem.id === id)

        this.showInfo(`Todo "${removedTooItems[0].description}" deleted successfully`)
      })
  }

  public addTodoItem() {
    this.navCtrl.push(AddTodoPage, {
      callback: (newTodoItem) => {
        this.todoList.push(newTodoItem)

        this.showInfo(`Todo "${newTodoItem.description}" added successfully`)
      }
    })
  }

  public goToEditPage(todoItem) {
    this.navCtrl.push(EditTodoPage, {
      todoItem: todoItem,
      callback: (description) => {
        todoItem.editDescription(description)
      }
    })
  }

  private showInfo(info: string) {
    let deletedTodoToast = this.toastCtrl.create({
      message: info,
      duration: 3000
    });

    deletedTodoToast.present()
  }
}
