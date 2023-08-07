import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface RentalRatingArgs {}
export default class RentalRatingComponent extends Component<RentalRatingArgs> {
  @tracked score: number = 0;

  @action
  upvote(): void {
    this.score++;
    console.log(this.score);
  }

  @action
  downvote(): void {
    this.score--;
    console.log(this.score);
  }
}
