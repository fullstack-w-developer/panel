const faker = require("../faker");

const generateFakeGateway = (_, id) => {
    let imageId = id;
    if (id >= 3) {
        imageId = parseInt(id % 3);
    }

    return {
        id,
        title: faker.lorem.word(5),
        image: `/media/mock/gateways/${imageId + 1}.png`,
    };
};

const generateFakeGateways = (count = 3) =>
    [...Array(count)].map(generateFakeGateway);

module.exports = {
    generateFakeGateways,
};
