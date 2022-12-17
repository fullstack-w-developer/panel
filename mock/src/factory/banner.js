const faker = require("../faker");

const generateFakeBanner = (_, id) => {
    let num = id;
    if (id >= 3) {
        num = parseInt(id % 3);
    }
    return {
        id,
        image: `/media/mock/banners/${num + 1}.jpg`,
        btn_link: "#0",
        btn_title: faker.lorem.words(1),
        title: faker.lorem.words(4),
        small_title: faker.lorem.words(4),
    };
};

const generateFakeBanners = (count = 3) =>
    [...Array(count)].map(generateFakeBanner);

module.exports = {
    generateFakeBanners,
};
