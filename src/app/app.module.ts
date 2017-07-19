import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TodoListPage } from '../pages/todo-list/todo-list';
import { EditTodoPage } from '../pages/edit-todo/edit-todo';
import { AddTodoPage } from "../pages/add-todo/add-todo";
import { TodoItemService } from "../common/services/todoItemService";
import { TodoListStorage } from "../common/model/todoListStorage";
import { NativeStorage } from "@ionic-native/native-storage";

@NgModule({
  declarations: [
    MyApp,
    TodoListPage,
    EditTodoPage,
    AddTodoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodoListPage,
    EditTodoPage,
    AddTodoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoItemService,
    TodoListStorage,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
