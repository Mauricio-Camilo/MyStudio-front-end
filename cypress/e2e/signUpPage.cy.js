/// <reference types="cypress" />

beforeEach(() => {
	cy.resetDatabase();
});


describe("main page suit test", () => {
    it("test for add recommendation", () => {

        const URL_FRONT = "http://localhost:3000";
        // const URL_SERVER = "http://localhost:5000/signin";

        const instructor = {
            name: "instructor1",
            cpf: "333.111.222-55",
            password: "abcdefg",
            confirmPassword: "abcdefg"
        }

        cy.visit(`${URL_FRONT}/signup`);
        cy.get("#name").type(instructor.name);
        cy.get("#cpf").type(instructor.cpf);
        cy.get("#password").type(instructor.password);
        cy.get("#confirmpassword").type(instructor.confirmPassword);

        cy.get("button").click();

		cy.url().should("equal", `${URL_FRONT}/`);

        cy.get("#login").type(instructor.cpf);
        cy.get("#password").type(instructor.password);

        cy.get("button").click();

        cy.url().should("equal", `${URL_FRONT}/main`)
    })
})