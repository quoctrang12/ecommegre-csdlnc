const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const NotFoundError = require('./src/common/response_error/NotFoundError')
const errorHandler = require('./src/middlewares/errorHandler')

const employeeController = require('./src/controllers/employee.controller');
const regionController = require('./src/controllers/region.controller');
const brandController = require('./src/controllers/brand.controller')
const categoryController = require('./src/controllers/category.controller')
const productController = require('./src/controllers/product.controller')
const versionController = require('./src/controllers/version.controller')
const importController = require('./src/controllers/import.controller')
const customerController = require('./src/controllers/customer.controller')
const addressController = require('./src/controllers/address.controller')
const voucherController = require('./src/controllers/voucher.controller')
const cartController = require('./src/controllers/cart.controller')
const orderController = require('./src/controllers/order.controller')
const shippingController = require('./src/controllers/shipping.controller')
const reviewController = require('./src/controllers/review.controller')
const favoriteController = require('./src/controllers/favorite.controller')
const dashboardController = require('./src/controllers/dashboard.controller')

const app = express();
app.use(cors({credentials: true, origin: process.env.URL_FRONTEND_SERVER}));
app.use(cookieParser());
app.use(express.json());

//Controller
app.use('/api/region', regionController);
app.use('/api/employee', employeeController);
app.use('/api/brand', brandController);
app.use('/api/category', categoryController);
app.use('/api/product', productController);
app.use('/api/version', versionController);
app.use('/api/import', importController);
app.use('/api/customer', customerController);
app.use('/api/address', addressController);
app.use('/api/voucher', voucherController);
app.use('/api/cart', cartController);
app.use('/api/order', orderController);
app.use('/api/shipping', shippingController);
app.use('/api/review', reviewController);
app.use('/api/favorite', favoriteController);
app.use('/api/dashboard', dashboardController);

app.use((req, res, next) => {
    next(new NotFoundError("Không tìm thấy tài nguyên!"));
})

app.use(errorHandler)

module.exports = app;
