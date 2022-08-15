const URL = "https://mauricio-mystudio.herokuapp.com"

Cypress.Commands.add("resetDatabase", () => {
    const deleteURL = "http://localhost:5000/tests/reset";
	    cy.request("POST", deleteURL).as("resetDatabase");
});

Cypress.Commands.add("seedDatabase", () => {
    const seedURL = "http://localhost:5000/tests/seed";
	    cy.request("POST", seedURL).as("seedDatabase");
});