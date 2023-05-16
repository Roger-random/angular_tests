import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAndChatComponent } from './feedback-and-chat.component';

describe('FeedbackAndChatComponent', () => {
  let component: FeedbackAndChatComponent;
  let fixture: ComponentFixture<FeedbackAndChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeedbackAndChatComponent]
    });
    fixture = TestBed.createComponent(FeedbackAndChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
