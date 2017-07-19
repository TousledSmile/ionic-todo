import { TodoItem } from "./todo";
import { NativeStorage } from "@ionic-native/native-storage";
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListStorage {

  constructor (private nativeStorage: NativeStorage) {}

  public getTodoList(): Promise<TodoItem[]> {
    return this.nativeStorage.keys()
      .then(keys => keys.filter(key => key.startsWith('todo_item_')))
      .then(keys => Promise.all(keys.map(key => this.nativeStorage.getItem(key))))
  }

  public createNewTodoItem(newTodoItem: TodoItem): Promise<TodoItem> {
    return this.getNewItemId()
      .catch(() => {
          return 0
      })
      .then(idCounter => newTodoItem.setId(idCounter))
      .then(() => this.saveTodoItem(newTodoItem))
      .then(() => this.saveItemCounter(newTodoItem.id))
      .then(() => newTodoItem)
  }

  public saveTodoItem(todoItem: TodoItem): Promise<any> {
    return this.nativeStorage.setItem('todo_item_' + todoItem.id, todoItem)
  }

  public removeTodoItem(id): Promise<any> {
    return this.nativeStorage.remove('todo_item_' + id)
  }

  private saveItemCounter(itemCounter): Promise<any> {
    return this.nativeStorage.setItem('todo_items_counter', itemCounter)
  }

  private getNewItemId(): Promise<number> {
    return this.nativeStorage.getItem('todo_items_counter')
      .then(itemCounter => itemCounter + 1)
  }
}
