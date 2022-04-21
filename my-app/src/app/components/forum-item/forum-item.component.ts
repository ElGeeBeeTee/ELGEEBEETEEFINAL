import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { ThreadService } from 'src/app/shared/services/thread.service';
import { Topic } from 'src/app/shared/services/topic';
import { FormBuilder } from '@angular/forms';
import { Comments } from 'src/app/shared/services/comments';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.css']
})

export class ForumItemComponent implements OnInit {

  topicId: string = "hello";
  selectedTopic!: Topic;

  commentForm = this.formBuilder.group({
    content: '',
    user: '',
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topicService: ThreadService,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.topicId = this.route.snapshot.paramMap.get('id')!;
    this.selectedTopic = this.topicService.getTopicsbyid(this.topicId);
  }
  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    //this.checkoutForm.reset();
    this.selectedTopic.comment.push(new Comments(this.commentForm.get('content')?.value,this.commentForm.get('user')?.value));
  }

}
