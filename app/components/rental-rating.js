import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RentalRatingComponent extends Component {
  @tracked score = 0;
  @tracked userVote = 0;
}
