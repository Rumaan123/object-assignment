//Assignment 3 :company product catalog


// Step 1: Define an array named inventory to store product information
type Product = {
    name: string;
    model: string;
    cost: number;
    quantity: number;
};

const inventory: Product[] = [];

// Step 2: Create three separate objects, each representing a product
const product1: Product = {
    name: 'Laptop',
    model: 'XPS 13',
    cost: 12000,
    quantity: 20
};

const product2: Product = {
    name: 'Smartphone',
    model: 'Galaxy S21',
    cost: 50000,
    quantity: 30
};

const product3: Product = {
    name: 'Tablet',
    model: 'iPad Pro',
    cost: 10000,
    quantity: 15
};

// Step 3: Add these product objects to the inventory array using an appropriate array method
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);

// Step 4: Access and log the quantity property of a specific product (e.g., third product) in the inventory array
console.log('Quantity of the third product:', inventory[2].quantity);

// Step 5: Explore adding and accessing more elements within the inventory array

// Adding a new product
const product4: Product = {
    name: 'Smartwatch',
    model: 'Apple Watch Series 6',
    cost: 4000,
    quantity: 30
};

inventory.push(product4);

// Access and log all products' names and models
console.log('Inventory:');
inventory.forEach(product => {
    console.log(`Name: ${product.name}, Model: ${product.model}, Cost: ${product.cost}, Quantity: ${product.quantity}`);
});

// Access a specific product by name
const findProductByName = (name: string): Product | undefined => {
    return inventory.find(product => product.name === name);
};

const searchedProduct = findProductByName('Smartwatch');
console.log('Searched Product:', searchedProduct);
