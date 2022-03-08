describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    // stub 404
    cy.server({force404: true});

    // stub server API response
    cy.route({
      method: 'GET',
      url: 'https://outside-in-dev-api.herokuapp.com/A2h2hdhHpLEQPaT1AFIawq6S57xeBkKu/restaurants',
      response: [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace},
      ],
    });

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
