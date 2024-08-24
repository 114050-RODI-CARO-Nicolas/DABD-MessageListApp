import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {
  newMessage : string = '';
  @Output() messageAdded = new EventEmitter<string>();
  
  addMessageAtChild(){
    this.messageAdded.emit(this.newMessage);
    this.newMessage = '';
  }

  onMsg(event : any){
    this.newMessage = event.target.value;
  }
}
