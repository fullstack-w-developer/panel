const faker = require("../faker");

const generateFakeCategory = (_, id) => {
    return {
        id: id + 1,
        title: faker.commerce.department(),
    };
};

const generateFakeCategories = (count = 13) =>
    [...Array(count)].map(generateFakeCategory);

module.exports = {
    generateFakeCategories,
};
