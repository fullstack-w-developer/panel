const faker = require("../faker");

const statuses = [
    "waiting_for_verification",
    "verified",
    "ready_to_send",
    "sent",
    "received",
    "canceled",
    "unsuccessful",
];

const generateFakeOrder = (_, id) => {
    let num = id;
    if (id >= 7) {
        num = parseInt(id % 7);
    }
    return {
        id,
        code: faker.datatype.number({
            min: 10000000000000,
            max: 99999999999999,
        }),
        status: statuses[num],
        date: faker.date.recent(50).getTime(),
        sum: faker.commerce.price(200, 8000) * 100,
    };
};

const generateFakeOrders = (count = 30) =>
    [...Array(count)].map(generateFakeOrder);

module.exports = {
    generateFakeOrders,
};
