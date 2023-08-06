import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalRatingComponent extends Component {
  @tracked score = 0;

  @action
  upvote() {
    this.score++;
  }

  @action
  downvote() {
    this.score--;
  }
}
