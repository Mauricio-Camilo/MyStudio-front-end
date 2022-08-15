/// <reference types="cypress" />

beforeEach(() => {
	cy.resetDatabase();
    cy.seedDatabase();
});

describe("main page suit test", () => {
    it("test for create a new client", () => {

        const URL_FRONT = "https://projeto22-mystudio-front.vercel.app";
        const URL_SERVER = "https://mauricio-mystudio.herokuapp.com";

        const login = {
            cpf: "000.000.000-00",
            password: "password",
        }

        const client = {
            name: "Cliente1",
            updateName: "Novo Cliente 1",
            date: "01/01/2023",
            payment: "Mensal",
            service: "Pilates",
            updatePayment: "Anual",
            updateService: "Barras"
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

        cy.get("#name").type(client.name,{force: true});
        cy.get("#startdate").type(client.date,{force: true});
        cy.contains(client.payment).click({force: true});
        cy.contains(client.service).click({force: true});

        cy.intercept("POST", `${URL_SERVER}/clients`).as("createClient");
          cy.contains("Cadastrar").click();
        cy.wait("@createClient");

        cy.contains(client.name).should("be.visible");
        cy.contains(client.payment).should("be.visible");
        cy.contains(client.service).should("be.visible");
    })
})