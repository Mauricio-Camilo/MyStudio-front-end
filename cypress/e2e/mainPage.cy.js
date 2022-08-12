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

        const client = {
            name: "Cliente1",
            updatename: "Novo Cliente 1",
            date: "01/01/2023"
        }

        cy.visit(`${URL_FRONT}/`);
        cy.get("#login").type(login.cpf);
        cy.get("#password").type(login.password);
        cy.intercept("POST", `${URL_SERVER}/signin`).as("signin");
            cy.get("button").click();
        cy.wait("@signin");

        cy.url().should("equal", `${URL_FRONT}/main`);
        cy.get("#creation").click();
        cy.url().should("equal", `${URL_FRONT}/insert`);

        cy.get("#name").type(client.name);
        cy.get("#startdate").type(client.date);
        cy.contains("Mensal").click();
        cy.intercept("POST", `${URL_SERVER}/clients`).as("createClient");
            cy.contains("Cadastrar").click();
        cy.wait("@createClient");
        cy.contains(client.name).should("be.visible");

        // cy.intercept("GET", `${URL_SERVER}/clients`).as("getClients");
        // cy.wait("@getClients");
        cy.contains("U").click();
        cy.url().should("equal", `${URL_FRONT}/update/1`);
        cy.get("#name").type(client.updatename);
        cy.contains("Anual").click();
        cy.intercept("PUT", `${URL_SERVER}/clients/1`).as("updateClient");
            cy.contains("Atualizar").click();
        cy.wait("@updateClient");
        cy.contains(client.updatename).should("be.visible");

        cy.intercept("DELETE", `${URL_SERVER}/clients/1`).as("deleteClient");
            cy.contains("X").click();
        cy.wait("@deleteClient");
    })
})