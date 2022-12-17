const faker = require("../faker");
const { generateFakeHtmlContent } = require("../helper");
const { generateFakeCategories } = require("./categories");
const { generateFakeTags } = require("./tags");
const { generateFakeComments } = require("./comment");

const generateFakePost = (_, id) => {
    const title = faker.lorem.words(8);
    let num = id;
    let avatarNum = id;
    if (id >= 6) {
        num = parseInt(id % 6);
    }

    if (id >= 10) {
        avatarNum = parseInt(id % 10);
    }

    return {
        id,
        title,
        author: {
            name: faker.name.firstName() + " " + faker.name.lastName(),
            image: `/media/mock/users/${avatarNum + 1}.jpg`,
            description: faker.lorem.words(40),
        },
        content: generateFakeHtmlContent(),
        description: faker.lorem.words(100),
        category: generateFakeCategories(
            faker.datatype.number({ min: 1, max: 3 })
        ),
        tags: generateFakeTags(faker.datatype.number({ min: 1, max: 5 })),
        views: faker.datatype.number({ min: 1000, max: 15000 }),
        rating: faker.datatype.number({ min: 1, max: 5 }),
        slug: id,
        image: `/media/mock/posts/${num + 1}.jpg`,
        date: new Date(faker.date.recent(20)).getTime(),
        comments: generateFakeComments(4),
    };
};

const generateFakePosts = (count = 80) =>
    [...Array(count)].map(generateFakePost);

module.exports = {
    generateFakePosts,
};
