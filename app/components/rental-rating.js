import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalRatingComponent extends Component {
  @tracked score = 0;
  @tracked userVote = 0;

  @action
  upvote() {
    if (this.userVote === -1) {
      // If the user previously downvoted, remove their downvote.
      this.score++;
    }
    if (this.userVote !== 1) {
      // If the user hasn't upvoted yet, add their upvote.
      this.score++;
      this.userVote = 1;
    }
  }

  @action
  downvote() {
    if (this.userVote === 1) {
      // If the user previously upvoted, remove their upvote.
      this.score--;
    }
    if (this.userVote !== -1) {
      // If the user hasn't downvoted yet, add their downvote.
      this.score--;
      this.userVote = -1;
    }
  }
}
