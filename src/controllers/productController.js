const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');

function getAllProducts(req, res) {
	const data = fs.readFileSync(filePath);
	const products = JSON.parse(data);
	res.json(products);
}

module.exports = {
	getAllProducts,
};
