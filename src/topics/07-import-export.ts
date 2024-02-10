import { Product, taxCalculation, tax } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPAd',
        price: 150
    }
];

//Tax = 0.15
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total', total);
console.log('Tax', taxTotal);