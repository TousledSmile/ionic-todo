import { Component } from '@angular/core'
import { AlertController, NavController, NavParams} from 'ionic-angular'
import { TodoItemService } from "../../common/services/todoItemService";
import {TodoItem} from "../../common/model/todo";

@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {
  todoItem: TodoItem
  description: string

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private todoItemService: TodoItemService
  ) {
    this.todoItem = navParams.get('todoItem')
    this.description = this.todoItem.description
  }

  confirmTodoDescription() {
    if (this.description && this.description.length) {

      this.todoItemService.updateDescription(this.todoItem, this.description)
        .then(() => {
          let callback = this.navParams.get('callback')

          callback(this.description)
          this.navCtrl.pop()
        })
        .catch(() => {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Problem with saving the data, try to run application again on your mobile phone',
            buttons: ['OK']
          });

          alert.present();
        })
    } else {
      let alert = this.alertCtrl.create({
        subTitle: 'Description cannot be empty!',
        buttons: ['OK']
      });

      alert.present();
    }
  }
}
