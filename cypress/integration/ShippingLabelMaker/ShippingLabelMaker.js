import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000';

const addresses = {
  from: {
    city: 'Fremont',
    name: 'Fred',
    state: 'FL',
    street: '555 Florida street',
    zip: '54321',
  },
  to: {
    city: 'Tennessee Ridge',
    name: 'Teddy',
    state: 'TN',
    street: '1010 Tennessee road',
    zip: '10123',
  },
};

Given('I am a logged in user', () => {
  cy.visit(url);
  cy.get('#user').type('Jane Doe');
  cy.get('#password').type(`${Math.random() * 1000000}`.slice(0, 6));
  cy.get('#form').submit();
});

When('I enter a {string} address', type => {
  cy.get('#name').type(addresses[type].name);
  cy.get('#street').type(addresses[type].street);
  cy.get('#city').type(addresses[type].city);
  cy.get('#state').type(addresses[type].state);
  cy.get('#zip').type(addresses[type].zip);
});

Then(`I should see the {string} button enabled`, buttonId => {
  cy.get(`#${buttonId.toLowerCase()}`).should('be.enabled');
});

When(`I click the {string} button`, buttonId => {
  cy.get(`#${buttonId.toLowerCase()}`).click();
});

When(`I enter a weight of {string}`, weight => {
  cy.get('#weight').type(weight);
});

When(`I choose the {string} shipping option`, option => {
  cy.get(`#shipping-${option}`).check();
});

Then('I should see the shipping label with a price of {string}', price => {
  cy.get('#price').should('have.text', price);
});
