class Cooker {

    constructor() {

        this.shop = new PizzaShop();

    }

}

// 
let pizza = new Pizza();

class Cooker {

    constructor(pizzaShop) {
        this.shop = pizzaShop;
    }

}
import { injector } from '@food-injector';

// 
let pizza = injector.get('pizza')