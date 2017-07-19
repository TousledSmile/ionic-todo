import { Component } from '@angular/core';
import { AlertController, NavController, NavParams} from 'ionic-angular';
import {TodoItemService} from "../../common/services/todoItemService";

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  description: string

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private todoItemService: TodoItemService
  ) {
    this.description = ''
  }

  confirmTodoDescription() {
    if (this.description && this.description.length) {
      let callback = this.navParams.get('callback')

      this.todoItemService.create(this.description)
        .then(newTodoItem => {
          callback(newTodoItem)
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
