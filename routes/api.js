import express from 'express';
const router = express.Router();

import * as UsersController from '../app/controllers/UsersController.js';
import * as BrandsController from '../app/controllers/BrandsController.js';
import * as CategoriesController from '../app/controllers/CategoriesController.js';
import * as ProductsController from '../app/controllers/ProductsController.js';
import * as InvoicesController from '../app/controllers/InvoicesController.js';
import * as WishListsController from '../app/controllers/WishListsController.js';
import * as CartListsController from '../app/controllers/CartListsController.js';


// Users Routes
router.post('/Login', UsersController.Login);
router.post('/VerifyLogin', UsersController.VerifyLogin);
router.post('/CreateUserProfile', UsersController.CreateUserProfile);
router.get('/ReadUserProfile', UsersController.ReadUserProfile);
router.post('/UpdateUserProfile', UsersController.UpdateUserProfile);

// Brands Routes
router.get('/BrandList', BrandsController.BrandList);

// Categories Routes
router.get('/CategoriesLists', CategoriesController.CategoriesLists);

// Cart Routes
router.post('/CreateCart', CartListsController.CreateCart);
router.get('/ReadCart', CartListsController.ReadCart);
router.post('/UpdateCart', CartListsController.UpdateCart);
router.get('/RemoveCart', CartListsController.RemoveCart);

// Wish Routes
router.post('/CreateWish', WishListsController.CreateWish);
router.get('/ReadWish', WishListsController.ReadWish);
router.get('/RemoveWish', WishListsController.RemoveWish);

// Create Product Review
router.post('/CreateProductReview', ProductsController.CreateProductReview);

// Products Routes
router.get('/ProductListByCategory', ProductsController.ProductListByCategory);
router.get('/ProductListByRemark', ProductsController.ProductListByRemark);
router.get('/ProductListByBrand', ProductsController.ProductListByBrand);
router.get('/ProductListBySlider', ProductsController.ProductListBySlider);
router.get('/ProductListByKeyword', ProductsController.ProductListByKeyword);
router.get('/ProductDetailsByID', ProductsController.ProductDetailsByID);
router.get('/ProductReviewListByID', ProductsController.ProductReviewListByID);
router.post('/UpdateProductReview', ProductsController.UpdateProductReview);

// Invoices Routes
router.post('/CreateInvoice', InvoicesController.CreateInvoice);
router.get('/ReadInvoice', InvoicesController.ReadInvoice);
router.get('/ReadInvoiceDetails', InvoicesController.ReadInvoiceDetails);


export default router;