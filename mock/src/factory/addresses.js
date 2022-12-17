const faker = require("../faker");

const generateFakeAddress = (_, id) => {
    return {
        id,
        city: faker.address.cityName(),
        province: faker.address.state(),
        postalCode: faker.address.zipCode(),
        fullName: faker.name.firstName() + " " + faker.name.lastName(),
        phone: faker.phone.phoneNumber("091########"),
        address: faker.address.streetName(),
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
    };
};

const generateFakeAddresses = (count = 7) =>
    [...Array(count)].map(generateFakeAddress);

module.exports = {
    generateFakeAddresses,
};
