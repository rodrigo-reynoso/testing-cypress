/// <reference types="cypress"/>

describe('Validar el formulario', ()=>{
    it('Submit al formulario y mostrar la alerta de error',()=>{
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.get('[data-cy="formulario"]')
            .submit();
        
        // Verificar el texto de alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal','Todos los campos son Obligatorios');
        // Verifico que tenga la clase correspondiente
        cy.get('[data-cy="alerta"]')
            .should('have.class','alert-danger');
    })
})