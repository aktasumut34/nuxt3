import { mount } from '@cypress/vue';
import { createPinia } from 'pinia';
import indexVue from '~~/pages/index.vue';
import '~~/assets/css/tailwind.css';

it('shows the App', () => {
  mount(indexVue, {
    global: { plugins: [createPinia()] }
  });
  for (let i = 0; i < 10; i++) {
    cy.get('#incrementButton').click();
  }
  cy.get('span').should((span) => {
    expect(span.text()).to.eq('10');
  });
});
