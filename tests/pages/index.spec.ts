it('shows the App', () => {
  cy.visit('localhost:3000');
  cy.wait(5000);
  const btn = cy.get('#incrementButton');
  for (let i = 0; i < 10; i++) {
    btn.click({ force: true });
  }
  cy.get('span').should((span) => {
    expect(span.text()).to.eq('10');
  });
});
