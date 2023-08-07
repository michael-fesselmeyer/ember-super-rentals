import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rentals', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      rentals: [
        {
          type: "rentals",
          id: "grand-old-mansion",
          attributes: {
            title: "Grand Old Mansion",
            owner: "Veruca Salt",
            city: "San Francisco",
            location: {
              lat: 37.7749,
              lng: -122.4194
            },
            category: "Estate",
            bedrooms: 15,
            image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
            description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
          }
        },
        {
          type: "rentals",
          id: "beachfront-bungalow",
          attributes: {
            title: "Beachfront Bungalow",
            owner: "Charlie Bucket",
            city: "Miami",
            location: {
              lat: 25.7617,
              lng: -80.1918
            },
            category: "Bungalow",
            bedrooms: 2,
            image: "https://i0.wp.com/traveladdictedunicorn.com/wp-content/uploads/2022/07/travel-addicted-unicorn-795-x-447-px.jpg?resize=795%2C447&ssl=1",
            description: "This cozy bungalow offers stunning ocean views and direct access to the beach. Perfect for a relaxing getaway."
          }
        },
        {
          type: "rentals",
          id: "mountain-retreat",
          attributes: {
            title: "Mountain Retreat",
            owner: "Augustus Gloop",
            city: "Aspen",
            location: {
              lat: 39.1911,
              lng: -106.8175
            },
            category: "Cabin",
            bedrooms: 4,
            image: "https://cdn1.matadornetwork.com/blogs/1/2022/02/mountain-vacations-Taylor-River-Lodge.jpg",
            description: "Nestled in the mountains, this cabin is perfect for those seeking a peaceful retreat in the great outdoors."
          }
        },
        {
          type: "rentals",
          id: "urban-loft",
          attributes: {
            title: "Urban Loft",
            owner: "Arthur Slugworth",
            city: "New York",
            location: {
              lat: 40.7128,
              lng: -74.006
            },
            category: "Loft",
            bedrooms: 2,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
            description: "This modern loft in the heart of the city is perfect for those seeking the hustle and bustle of city life."
          }
        },
        {
          type: "rentals",
          id: "country-cottage",
          attributes: {
            title: "Country Cottage",
            owner: "Mike Teavee",
            city: "Nashville",
            location: {
              lat: 36.1627,
              lng: -86.7816
            },
            category: "Cottage",
            bedrooms: 3,
            image: "https://thehermitage.com/wp-content/uploads/2014/10/downtown-nashville.jpg",
            description: "This charming cottage is perfect for those seeking a peaceful retreat in the countryside, but still close to city amenities."
          }
        },
        {
          type: "rentals",
          id: "lakeside-lodge",
          attributes: {
            title: "Lakeside Lodge",
            owner: "Violet Beauregarde",
            city: "Lake Tahoe",
            location: {
              lat: 39.0968,
              lng: -120.0324
            },
            category: "Lodge",
            bedrooms: 5,
            image: "https://cdn1.matadornetwork.com/blogs/1/2022/02/mountain-vacations-Resort-at-Squaw-Creek-2.jpg",
            description: "This spacious lodge offers stunning lake views and is perfect for a family vacation or group retreat."
          }
        },
        {
          type: "rentals",
          id: "desert-villa",
          attributes: {
            title: "Desert Villa",
            owner: "Veruca Salt",
            city: "Palm Springs",
            location: {
              lat: 33.8303,
              lng: -116.5453
            },
            category: "Villa",
            bedrooms: 4,
            image: "https://www.travelandleisure.com/thmb/R6q6KgfNc5XYG9equcDdd6K1IfE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-colony-palms-pool-WHYGPS0423-066fafe845444ded9f8d59a02dba8c6b.jpg",
            description: "This luxurious villa is perfect for a relaxing getaway in the desert. Enjoy the private pool and stunning mountain views."
          }
        },
        {
          type: "rentals",
          id: "city-penthouse",
          attributes: {
            title: "City Penthouse",
            owner: "Willy Wonka",
            city: "Chicago",
            location: {
              lat: 41.8781,
              lng: -87.6298
            },
            category: "Penthouse",
            bedrooms: 3,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Chicago_from_North_Avenue_Beach_June_2015_panorama_2_cropped.jpg",
            description: "This luxurious penthouse offers stunning city views. Located in the heart of the city, it's perfect for a stylish urban getaway."
          }
        },
        {
          type: "rentals",
          id: "coastal-cabin",
          attributes: {
            title: "Coastal Cabin",
            owner: "Charlie Bucket",
            city: "Monterey",
            location: {
              lat: 36.6002,
              lng: -121.8947
            },
            category: "Cabin",
            bedrooms: 2,
            image: "https://cdn1.matadornetwork.com/blogs/1/2022/02/mountain-vacations-Tordrillo-Moutain-Lodge-2.jpg",
            description: "This cozy cabin is located just steps from the beach. It's the perfect place for a relaxing coastal getaway."
          }
        },
        {
          type: "rentals",
          id: "farmhouse-retreat",
          attributes: {
            title: "Farmhouse Retreat",
            owner: "Augustus Gloop",
            city: "Austin",
            location: {
              lat: 30.2672,
              lng: -97.7431
            },
            category: "Farmhouse",
            bedrooms: 4,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Austin2012-12-01.JPG",
            description: "This charming farmhouse offers a taste of country living with the convenience of a city nearby. It's the perfect place for a peaceful retreat."
          }
        },
        {
          type: "rentals",
          id: "urban-living",
          attributes: {
            title: "Urban Living",
            owner: "Mike Teavee",
            city: "Seattle",
            location: {
              lat: 47.6062,
              lng: -122.3321
            },
            category: "Condo",
            bedrooms: 1,
            image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Seattle_-_Barnes_and_Bell_Buildings.jpg",
            description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
          }
        },
        {
          type: "rentals",
          id: "downtown-charm",
          attributes: {
            title: "Downtown Charm",
            owner: "Violet Beauregarde",
            city: "Portland",
            location: {
              lat: 45.5175,
              lng: -122.6801
            },
            category: "Apartment",
            bedrooms: 3,
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
            description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
          }
        }
      ],
    });
  });

  test('it renders all given rental properties by default', async function (assert) {
    await render(hbs`<Rentals @rentals={{this.rentals}} />`);

    assert.dom('.rentals').exists();
    assert.dom('.rentals input').exists();

    assert.dom('.rentals .results').exists();
    assert.dom('.rentals .results li').exists({ count: 12 });

    assert.dom('.rentals .results li:nth-of-type(1)').containsText('Grand Old Mansion');
    assert.dom('.rentals .results li:nth-of-type(2)').containsText('Beachfront Bungalow');
    assert.dom('.rentals .results li:nth-of-type(3)').containsText('Mountain Retreat');
    assert.dom('.rentals .results li:nth-of-type(4)').containsText('Urban Loft');
    assert.dom('.rentals .results li:nth-of-type(5)').containsText('Country Cottage');
    assert.dom('.rentals .results li:nth-of-type(6)').containsText('Lakeside Lodge');
    assert.dom('.rentals .results li:nth-of-type(7)').containsText('Desert Villa');
    assert.dom('.rentals .results li:nth-of-type(8)').containsText('City Penthouse');
    assert.dom('.rentals .results li:nth-of-type(9)').containsText('Coastal Cabin');
    assert.dom('.rentals .results li:nth-of-type(10)').containsText('Farmhouse Retreat');
    assert.dom('.rentals .results li:nth-of-type(11)').containsText('Urban Living');
    assert.dom('.rentals .results li:nth-of-type(12)').containsText('Downtown Charm');
  });

  test('it updates the results according to the search query', async function (assert) {
    await render(hbs`<Rentals @rentals={{this.rentals}} />`);

    assert.dom('.rentals').exists();
    assert.dom('.rentals input').exists();

    await fillIn('.rentals input', 'Downtown');

    assert.dom('.rentals .results').exists();
    assert.dom('.rentals .results li').exists({ count: 1 });
    assert.dom('.rentals .results li').containsText('Downtown Charm');

    await fillIn('.rentals input', 'Mansion');

    assert.dom('.rentals .results').exists();
    assert.dom('.rentals .results li').exists({ count: 1 });
    assert.dom('.rentals .results li').containsText('Grand Old Mansion');
  });
});
