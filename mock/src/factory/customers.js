const faker = require("../faker");

const generateFakeCustomer = (_, id) => {
    faker.setLocale("en");
    const url = faker.internet.url();
    faker.setLocale("fa");
    let num = id;
    if (id >= 5) {
        num = parseInt(id % 5);
    }
    return {
        id,
        title: faker.lorem.words(7),
        url,
        image: `/media/mock/customers/${num + 1}.png`,
    };
};

const generateFakeCustomers = (count = 12) =>
    [...Array(count)].map(generateFakeCustomer);

module.exports = {
    generateFakeCustomers,
};
