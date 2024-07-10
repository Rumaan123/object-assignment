//Assignment3 :company product catalog
var inventory = [];
// Step 2: Create three separate objects, each representing a product
var product1 = {
    name: 'Laptop',
    model: 'XPS 13',
    cost: 12000,
    quantity: 20
};
var product2 = {
    name: 'Smartphone',
    model: 'Galaxy S21',
    cost: 50000,
    quantity: 30
};
var product3 = {
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
var product4 = {
    name: 'Smartwatch',
    model: 'Apple Watch Series 6',
    cost: 4000,
    quantity: 30
};
inventory.push(product4);
// Access and log all products' names and models
console.log('Inventory:');
inventory.forEach(function (product) {
    console.log("Name: ".concat(product.name, ", Model: ").concat(product.model, ", Cost: ").concat(product.cost, ", Quantity: ").concat(product.quantity));
});
// Access a specific product by name
var findProductByName = function (name) {
    return inventory.find(function (product) { return product.name === name; });
};
var searchedProduct = findProductByName('Smartwatch');
console.log('Searched Product:', searchedProduct);
