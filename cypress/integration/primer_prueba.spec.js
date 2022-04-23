/// <reference types="cypress"/>

describe('Carga la pagina principal',()=>{
    it('Carga la pagina y encuentra el H1',()=>{
        // Carga la pagina
        cy.visit('http://127.0.0.1:5500/index.html');
        // Verifica el elemento y su texto
        cy.contains('h1','Administrador de Pacientes de Veterinaria');
        // Verifica que exista
        cy.get('[data-cy="titulo-proyecto"]').should('exist');
        // Verifica que exista y contenga un texto exacto
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal','Administrador de Pacientes de Veterinaria');
        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una');
        // Verificar que no es igual a
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('not.equal','no hay citas, comienza creando una');
    })
})