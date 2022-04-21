import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ThreadService } from 'src/app/shared/services/thread.service';
import { Topic } from 'src/app/shared/services/topic';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  topics: Topic[] = [];

  topicForm = this.formBuilder.group({
    myname: '',
    content: ''
  });

  constructor(public authService: AuthService, private topicService: ThreadService, private formBuilder: FormBuilder,) {}
  ngOnInit(): void {
    this.topics = this.topicService.getTopics();
  }

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    //this.checkoutForm.reset();
    this.topics.push(new Topic(this.topicForm.get('myname')?.value,this.topicForm.get('content')?.value,'',[]));
  }
}
