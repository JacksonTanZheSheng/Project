import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Tweet } from './tweet';

@Injectable()
export class FeedService {

  tweets = [
    new Tweet('Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    'Glen', new Date(), ['Joe'], []),
    new Tweet( 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    'Joe', new Date(), ['Joe'], ['Mary']),
    new Tweet( 'Debugging is twice as hard as writing the code in the first place.',
    'Mary', new Date(),  ['Glen'], ['Mary']),
    new Tweet( 'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each othe, like a wall of mini stones.',
    'Glen', new Date(),  ['Joe', 'Mary'], []),
    new Tweet( 'You cant have great software without a great team, and most software teams behave like dysfunctional families.',
    'Joe', new Date(), [], ['Mary', 'Glen']),
  ]

  constructor(private userService: UserService) { }

  getCurrentFeed(): Array<Tweet> {
    return this.tweets;
  }

  private isUserInCollection(collection: string[], userId: string): boolean {
    return collection.indexOf(userId) != -1;
  }

  favoriteTweet(t) {
    if(!this.isUserInCollection(t.favorites, this.userService.getCurrentUser()))
      t.favorites.push(this.userService.getCurrentUser());
  }

  postNewTweet(tweetText: string) {
    this.tweets.unshift(
      new Tweet(tweetText, this.userService.getCurrentUser(), new Date(), [], [])
    );
  }

  reTweet(t: Tweet) {
    if(!this.isUserInCollection(t.retweets, this.userService.getCurrentUser()))
      t.retweets.push(this.userService.getCurrentUser());
  }

  getFriends(): Array<string> {
    return ['Mary', 'Joe', 'Karen', 'Phil', 'Toni'];
  }
}
