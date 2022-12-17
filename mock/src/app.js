const faker = require("./faker");
const parse = require("parse-link-header");
const jsonServer = require("json-server");
const data = require("../db.json");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router(data);

app.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

app.options("*", cors());

app.use(jsonServer.bodyParser);

app.use(function (req, res, next) {
    if (process.env.NODE_ENV !== "production") {
        // We need a fake delay in dev environment for all routes
        setTimeout(next, 500);
    } else {
        next();
    }
});

app.post("/product/favorite", function (req, res, next) {
    res.jsonp({ isFavorite: true });
});

app.post("/auth/otp/send", function (req, res, next) {
    const response = {
        code: 123456,
    };
    if (req.body.mobile === "09123456789") {
        res.jsonp({ ...response, password: true });
    }
    res.jsonp({ ...response, password: false });
});

app.post("/apply-discount", function (req, res, next) {
    const code = req.body.discount_code;
    if (code === "amount" || code === "percent") {
        let isAmount = true;
        if (code === "percent") {
            isAmount = false;
        }
        const response = isAmount
            ? {
                  value: faker.datatype.number({ min: 5000, max: 25000 }),
                  type: "amount",
              }
            : {
                  value: faker.datatype.number({ min: 1, max: 20 }),
                  type: "percent",
              };
        res.jsonp({ ...response });
    }
    res.status(400).jsonp({ message: "Invalid code" });
});

app.post("/auth/otp/password", function (req, res, next) {
    const response = { token: "abc123" };
    const { password, code } = req.body;
    if (code === "123456" && password === "abc123") {
        res.jsonp(response);
    } else {
        res.status(401).jsonp({ message: "Wrong code or password" });
    }
});

app.post("/auth/otp/check", function (req, res, next) {
    const response = { token: "abc123" };
    if (req.body.code === "123456") {
        res.jsonp(response);
    } else {
        res.status(401).jsonp({ message: "Wrong code or password" });
    }
});

app.use(
    jsonServer.defaults({
        logger: process.env.NODE_ENV !== "production",
    })
);

app.use(router);

router.render = (req, res) => {
    const response = res.locals.data;
    if (req.method === "GET") {
        const isArray = Array.isArray(response);
        const link = res.getHeader("link");
        if (link) {
            const parsed = parse(link);
            let meta = { currentPage: 1, lastPage: 1 };
            if (isArray) {
                if (parsed) {
                    meta = {
                        currentPage: parseInt(parsed.first._page),
                        lastPage: parseInt(parsed.last._page),
                    };
                }
                res.jsonp({ data: response, meta });
            } else {
                res.jsonp(response);
            }
        } else {
            res.jsonp(response);
        }
    } else {
        res.jsonp(response);
    }
};

module.exports = app;
