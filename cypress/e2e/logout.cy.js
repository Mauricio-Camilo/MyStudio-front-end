/// <reference types="cypress" />

beforeEach(() => {
	cy.resetDatabase();
    cy.seedDatabase();
});

describe("main page suit test", () => {
    it("test for create a new client", () => {

        const URL_FRONT = "http://localhost:3000";
        const URL_SERVER = "http://localhost:5000";

        const login = {
            cpf: "000.000.000-00",
            password: "password",
        }
        cy.visit(`${URL_FRONT}/`);
        cy.get("#login").type(login.cpf);
        cy.get("#password").type(login.password);
        cy.intercept("POST", `${URL_SERVER}/signin`).as("signin");
            cy.get("button").click();
        cy.wait("@signin");
        cy.url().should("equal", `${URL_FRONT}/main`);

        cy.wait(2000);
        cy.contains("Logout").click();
        cy.url().should("equal", `${URL_FRONT}/`);
    })
})