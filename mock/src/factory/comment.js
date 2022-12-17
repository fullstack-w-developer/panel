const faker = require("../faker");

const generateFakeComment = (id, hasReplies) => {
    const repliesCount = faker.datatype.number({ min: 1, max: 5 });
    faker.locale = "en";
    const email = faker.internet.email();
    faker.locale = "fa";
    const shouldGenerateReplies = faker.datatype.boolean() && hasReplies;
    let num = id;
    if (id >= 10) {
        num = parseInt(id % 3);
    }
    return {
        id: id + 1,
        email,
        rating: faker.datatype.number({ min: 1, max: 5, precision: 0.5 }),
        author: faker.name.firstName() + " " + faker.name.lastName(),
        avatar: `/media/mock/users/${num + 1}.jpg`,
        date: new Date(faker.date.recent(20)).getTime(),
        text: faker.lorem.paragraph(2),
        replies: shouldGenerateReplies
            ? generateFakeComments(repliesCount, false)
            : [],
    };
};

const generateFakeComments = (count = 20, hasReplies = true) => {
    return [...Array(count)].map((_, id) => {
        return generateFakeComment(id, hasReplies);
    });
};

module.exports = {
    generateFakeComments,
};
