import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMessageComponent } from './add-message/add-message.component';
import { ListMessageComponent } from './list-message/list-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMessageComponent, ListMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase_23_08_24';
  messagesAtTheParent: string[] = []

  addMessage(newMessage : string) {
    this.messagesAtTheParent.push(newMessage)
  }
}
