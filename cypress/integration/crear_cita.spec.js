///<reference types="cypress"/>
describe('Cargar la pagina principlalLLena los campos para nueva ita y la muestra',()=>{
    it('Campos nueva cita',()=>{
        cy.visit('http://127.0.0.1:5500/index.html');

        // Cargar textos de los inputs
        cy.get('[data-cy="mascota-input"]')
            .type('Toro');
        cy.get('[data-cy="propietario-input"]')
            .type('Lili');
        cy.get('[data-cy="telefono-input"]')
            .type('324235423523');
        cy.get('[data-cy="fecha-input"]')
            .type('2021-12-13');
        cy.get('[data-cy="hora-input"]')
            .type('10:30');
        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo duerme');
        // Verificar el submit a la cita
        cy.get('[data-cy="submit-cita"]')
        .click();
        // Verificar cuando aparece el alerta correcto su texto y su clase
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal','Se agregó correctamente');
        cy.get('[data-cy=alerta]')
            .should('have.class','alert-success');
        // Verificar heading
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal','Administra tus Citas ');
    })
})