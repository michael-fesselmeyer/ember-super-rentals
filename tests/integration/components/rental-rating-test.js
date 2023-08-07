import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental-rating', function (hooks) {
  setupRenderingTest(hooks);

  test('it updates the score on upvoting and downvoting', async function (assert) {
    await render(hbs`<RentalRating />`);

    assert.dom('.score').hasText('0');

    await click('.upvote-button');
    assert.dom('.score').hasText('1');

    await click('.downvote-button');
    assert.dom('.score').hasText('0');

    await click('.downvote-button');
    assert.dom('.score').hasText('-1');
  });

  test('it updates the score on multiple upvotes and downvotes', async function (assert) {
    await render(hbs`<RentalRating />`);

    assert.dom('.score').hasText('0');

    // Loop to upvote 5 times
    for (let i = 0; i < 5; i++) {
      await click('.upvote-button');
    }
    assert.dom('.score').hasText('5');

    // Loop to downvote 7 times
    for (let i = 0; i < 7; i++) {
      await click('.downvote-button');
    }
    assert.dom('.score').hasText('-2');
  });
});
