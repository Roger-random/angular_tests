import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedbackAndChatComponent } from './feedback-and-chat/feedback-and-chat.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FeedbackAndChatComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'photo-gallery-app';
}
