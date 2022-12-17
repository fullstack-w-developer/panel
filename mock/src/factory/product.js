const faker = require("../faker");
const { generateFakeCategories } = require("./categories");
const { generateFakeComments } = require("./comment");

const generateFakeProduct = (_, id) => {
    const title =
        faker.commerce.product() +
        " " +
        faker.commerce.productAdjective() +
        " " +
        faker.commerce.productMaterial();

    let price = faker.commerce.price() * 100;
    let oldPrice = faker.commerce.price() * 100;
    let num = id;

    if (id >= 3) {
        num = parseInt(id % 3);
    }
    if (price > oldPrice) {
        oldPrice = price;
        var offPercentage = 0;
    } else {
        var offPercentage = Math.round(((oldPrice - price) * 100) / oldPrice);
    }

    return {
        id,
        slug: id,
        code: faker.datatype.number({ min: 100000, max: 1000000 }),
        title,
        price,
        description: faker.lorem.paragraphs(4),
        short_description: faker.lorem.paragraphs(2),
        categories: generateFakeCategories(
            faker.datatype.number({ min: 1, max: 3 })
        ),
        image: `/media/mock/products/${num + 1}.png`,
        inStock: faker.datatype.boolean(),
        minOrder: faker.datatype.number({ min: 10, max: 50 }),
        maxOrder: faker.datatype.number({ min: 150, max: 250 }),
        rating: faker.datatype.number({ min: 1, max: 5 }),
        gallery: [...Array(3)].map(
            (_, i) => `/media/mock/products/${i + 1}.png`
        ),
        features: generateFakeFeatures(),
        properties: generateProductProperties(
            faker.datatype.number({ min: 2, max: 10 })
        ),
        sold: faker.datatype.number({ min: 100, max: 1500 }),
        oldPrice,
        offPrice: oldPrice - price,
        offPercentage,
        colors: [...Array(5)].map(() => faker.internet.color()),
        comments: generateFakeComments(4),
    };
};

const generateFakeProducts = (count = 80) =>
    [...Array(count)].map(generateFakeProduct);

const generateProductProperties = (count = 10) => {
    return [...Array(count)].map((_, i) => ({
        key: faker.lorem.words(2),
        value: faker.lorem.words(5),
    }));
};

const generateFakeFeatures = (count = 10) => {
    return [...Array(count)].map(() => ({
        key: faker.lorem.words(2),
        value: faker.datatype.boolean(),
    }));
};

module.exports = {
    generateFakeProducts,
};
