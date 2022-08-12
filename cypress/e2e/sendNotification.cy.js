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

        function calculate25daysleft () {
            const today = new Date();
            const minus30days = new Date(today.setDate(today.getDate() - 25));
            return minus30days.toLocaleDateString("pt-BR");
        }

        const client = {
            name: "Cliente1",
            updatename: "Novo Cliente 1",
            date: calculate25daysleft()
        }

        cy.visit(`${URL_FRONT}/`);
        cy.get("#login").type(login.cpf);
        cy.get("#password").type(login.password);
        cy.intercept("POST", `${URL_SERVER}/signin`).as("signin");
            cy.get("button").click();
        cy.wait("@signin");

        cy.url().should("equal", `${URL_FRONT}/main`);
        cy.wait(1000);
        cy.get("#creation").click();
        cy.url().should("equal", `${URL_FRONT}/insert`);

        cy.get("#name").type(client.name);
        cy.get("#startdate").type(client.date);
        cy.contains("Mensal").click();
        cy.intercept("POST", `${URL_SERVER}/clients`).as("createClient");
            cy.contains("Cadastrar").click();
        cy.wait("@createClient");
        cy.contains(client.name).should("be.visible");     
    })
})