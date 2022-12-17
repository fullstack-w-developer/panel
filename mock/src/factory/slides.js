const faker = require("../faker");

const generateFakeSlide = (_, id) => {
    let num = id;
    if (id >= 4) {
        num = parseInt(id % 4);
    }
    return {
        id,
        image: `/media/mock/slides/${num + 1}.jpg`,
        btn_link: "#0",
        btn_title: faker.lorem.words(1),
        sub_title: faker.lorem.words(3),
        description: faker.lorem.words(5),
        title: faker.lorem.words(4),
    };
};

const generateFakeSlides = (count = 5) =>
    [...Array(count)].map(generateFakeSlide);

module.exports = {
    generateFakeSlides,
};
