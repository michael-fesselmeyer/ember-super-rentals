import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental-rating', function (hooks) {
  setupRenderingTest(hooks);

  test('it updates the score on upvoting and downvoting', async function (assert) {
    await render(hbs`<RentalRating />`);

    assert.dom('.score').hasText('0');

    await this.element.querySelector('.upvote-button').click();

    assert.dom('.score').hasText('1');

    await this.element.querySelector('.downvote-button').click();

    assert.dom('.score').hasText('0');

    await this.element.querySelector('.downvote-button').click();

    assert.dom('.score').hasText('-1');
  });

  test('it prevents double-voting', async function (assert) {
    await render(hbs`<RentalRating />`);

    await this.element.querySelector('.upvote-button').click();
    await this.element.querySelector('.upvote-button').click();

    assert.dom('.score').hasText('1');

    await this.element.querySelector('.downvote-button').click();
    await this.element.querySelector('.downvote-button').click();

    assert.dom('.score').hasText('-1');
  });

  test('it updates the score on multiple upvotes and downvotes', async function (assert) {
    await render(hbs`<RentalRating />`);

    assert.dom('.score').hasText('0');

    for (let i = 0; i < 5; i++) {
      await this.element.querySelector('.upvote-button').click();
    }

    assert.dom('.score').hasText('5');

    for (let i = 0; i < 7; i++) {
      await this.element.querySelector('.downvote-button').click();
    }

    assert.dom('.score').hasText('-2');
  });
});
