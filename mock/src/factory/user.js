const faker = require("../faker");

const generateFakeUser = (_, id) => {
    faker.locale = "en";
    const email = faker.internet.email();
    faker.locale = "fa";
    return {
        id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber("091########"),
        city: faker.address.city(),
        province: faker.address.state(),
        email,
    };
};

const generateFakeUsers = (count = 50) =>
    [...Array(count)].map(generateFakeUser);

module.exports = { generateFakeUsers, generateFakeUser };
