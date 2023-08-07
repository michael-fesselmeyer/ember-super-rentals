import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES: string[] = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  @attr title!: string;
  @attr owner!: string;
  @attr city!: string;
  @attr location!: Record<string, any>;
  @attr category!: string;
  @attr image!: string;
  @attr bedrooms!: number;
  @attr description!: string;

  get type(): string {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
