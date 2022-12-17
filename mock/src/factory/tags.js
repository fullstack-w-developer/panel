const faker = require("../faker");

const generateFakeTag = (_, id) => {
    return {
        id: id + 1,
        title: faker.commerce.department(),
    };
};

const generateFakeTags = (count = 13) => [...Array(count)].map(generateFakeTag);

module.exports = {
    generateFakeTags,
};
