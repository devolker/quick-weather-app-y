// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import { describe } from "mocha";

describe("Basic tests", () => {
  it("successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL
    cy.get("#cityWeatherPage").click();
    cy.get("#cityWeatherTemperature");
    cy.get("#nowDate");
  });
});
