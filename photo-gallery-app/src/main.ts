import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';

const routes = [
  {
    path: 'feedback-and-chat',
    loadComponent: () => import('./app/feedback-and-chat/feedback-and-chat.component').then(c => c.FeedbackAndChatComponent),
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
