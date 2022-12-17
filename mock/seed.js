const fs = require("fs");
const { generateFakeHtmlContent } = require("./src/helper");
const { generateFakeCategories } = require("./src/factory/categories");
const { generateFakePosts } = require("./src/factory/post");
const { generateFakeProducts } = require("./src/factory/product");
const { generateFakeUsers, generateFakeUser } = require("./src/factory/user");
const { generateFakeAddresses } = require("./src/factory/addresses");
const { generateFakeOrders } = require("./src/factory/orders");
const { generateFakeGateways } = require("./src/factory/gateways");
const { generateFakeSlides } = require("./src/factory/slides");
const { generateFakeCustomers } = require("./src/factory/customers");
const { generateFakeBanners } = require("./src/factory/banner");
const { generateFakeComments } = require("./src/factory/comment");

const db = {
    user: {},
    addresses: [],
    comments: [],
    orders: [],
    users: [],
    products: [],
    categories: [],
    posts: [],
    favorites: [],
    gateways: [],
    slides: [],
    customers: [],
    about: {},
};

db.users = generateFakeUsers();
db.user = generateFakeUser();
db.about = { data: { content: generateFakeHtmlContent() } };
db.comments = generateFakeComments();
db.addresses = generateFakeAddresses();
db.orders = generateFakeOrders();
db.products = generateFakeProducts();
db.categories = generateFakeCategories();
db.posts = generateFakePosts();
db.favorites = generateFakeProducts(6);
db.gateways = generateFakeGateways();
db.slides = generateFakeSlides();
db.customers = generateFakeCustomers();
db.banners = generateFakeBanners();

fs.writeFile("db.json", JSON.stringify(db, null, 2), function () {
    console.log("Mock data has been generated");
});
