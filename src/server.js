const connect = require("./configs/db");

const app = require("./index");

app.listen(4455, async () => {
    await connect();
    console.log("listening on port 2345");
})