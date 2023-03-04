describe('Тестирование testqastudio', function () {
    it('Проверка успешной покупки', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();

         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.woocommerce-mini-cart__buttons > [href="https://sh3910517.c.had.su/cart/"]').click();
         cy.get('.home > span').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5000)
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Дима');
         cy.get('#billing_last_name').type('QA');
         cy.get('#billing_address_1').type('дом 9 улица Крылова');
         cy.get('#billing_city').type('Москва');
         cy.get('#billing_state_field').type('Московская');
         cy.get('#billing_postcode').type('119230');
         cy.get('#billing_phone').type('84959394086');
         cy.get('#billing_email').type('testqa@yandex.ru');
         cy.get('#place_order').click();
         cy.get('.page-header__title').contains('Оформение заказа').should('be.visible');
         cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
         cy.get('.home > span').click();


         
        

     })
 })
 