import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss'
})
export class ChatMessagesComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  stars: boolean[] = [];

  ngOnInit() {
    this.stars = Array(this.maxRating).fill(false);
  }

  rate(star: number) {
    this.rating = star;
    this.ratingChange.emit(this.rating);
  }
}
