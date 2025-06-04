import express from 'express';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Requests real time log
app.use((req, res, next) => {
	console.log(
		`${req.method} request received from ${req.ip} in: ${new Date()}`
	);
	next();
});

app.use(express.json());
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.listen(PORT, () => {
	console.log(`Products_API running on port ${PORT}`);
});
