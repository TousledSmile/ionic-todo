import { TodoItem } from "../model/todo";
import { TodoListStorage } from "../model/todoListStorage";
import { Injectable } from '@angular/core';

@Injectable()
export class TodoItemService {
  constructor (private todoListStorage: TodoListStorage) {}

  public getTodoList(): Promise<TodoItem[]> {
    return this.todoListStorage.getTodoList()
  }

  public create(description: string): Promise<TodoItem> {
    let newTodoItem = new TodoItem(description)

    return this.todoListStorage.createNewTodoItem(newTodoItem)
  }

  public updateDescription(todoItem: TodoItem, description: string): Promise<TodoItem> {
    todoItem.editDescription(description)

    return this.todoListStorage.saveTodoItem(todoItem)
  }

  public toggleDone(todoItem: TodoItem): Promise<TodoItem> {
    todoItem.toggleDone()

    return this.todoListStorage.saveTodoItem(todoItem)
  }

  public remove(id: number): Promise<any> {
    return this.todoListStorage.removeTodoItem(id)
  }
}
