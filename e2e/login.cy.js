describe('Форма логина и пароля', function () {
    
    it('1.1 Правильный пароль, правильный логин ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })
    it('1.2 Забыли пароль? ', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').contains('Забыли пароль?').should('be.visible');
            cy.get('#forgotEmailButton').click();
            cy.get('#forgotForm > .header').contains('Восстановите пароль').should('be.visible');
            cy.get('#mailForgot').type('german@dolnikov.ru');
            cy.get('#restoreEmailButton').contains('Отправить код').should('be.visible');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').click();
    
        })

    it('1.3 Правильный пароль, неверный логин ', function () {
            cy.reload();
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio2');
            cy.get('#loginButton').click();
            cy.contains('Такого логина или пароля нет').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').click();
            cy.contains('Форма логина').should('be.visible');
        })
        it('1.4 Не правильный логин, правильный пароль ', function () {
            cy.reload();
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
    
            })

            it('1.5 Не правильный логин, правильный пароль и ошибка в тексте ', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('germandolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('НЕНужно исправить проблему валидации').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
        
                })
            it('1.6 Правильный пароль, не правильный логин большими буквами', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.contains('Авторизация прошла успешно').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            
                 })
})
