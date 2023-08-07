import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const TWEET_INTENT: string = 'https://twitter.com/intent/tweet';

interface ShareButtonArgs {
  text?: string;
  hashtags?: string;
  via?: string;
}

export default class ShareButtonComponent extends Component<ShareButtonArgs> {
  @service router!: any; // Ideally, you'd want to use the type for the Ember router service.

  get currentURL(): URL {
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareURL(): URL {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL.toString());

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
