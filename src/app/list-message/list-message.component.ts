import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {
  @Input() messagesParamForTheChildList : string [] = []

}
