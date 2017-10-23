import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Tweet } from '../tweet';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  providers: [UserService, FeedService],
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [];

  tweetText = '';

  constructor(private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
    this.tweets = this.feedService.getCurrentFeed();
  }

  onFavorite(t) {
    this.feedService.favoriteTweet(t);
  }

  onRetweet(t) {
    this.feedService.reTweet(t);
  }

  onNewTweet() {
    console.log(this.tweetText);
    this.feedService.postNewTweet(this.tweetText);
    this.tweetText = '';
  }
}
