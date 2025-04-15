const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Requests log
app.use((req, res, next) => {
	console.log(
		`${req.method} request received from ${req.ip} in: ${new Date()}`
	);
	next(); // go to the next middleware
});

app.use(express.json());
app.use('/products', productRoutes);

app.listen(PORT, () => {
	console.log(`Products_API running on port ${PORT}`);
});
