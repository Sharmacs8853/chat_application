const express = require("express");
const cors = require("cors");
const axios = require('axios')
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
    res.send("hii welcome to my Jitendra sharma chat app")
})

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // console.log(username);
    // res.status(200).send({"username": username})
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "6b05efdf-b45c-49aa-ab3c-5bc145dd6f91" } }
        );
        res.status(r.status).send(r.data);
    } catch (e) {
         res.status(e.response.status).send(e.response.data);
    }
});

app.listen(3001, () => {
    try {
        console.log('server start on http://localhost:3001');
    } catch (error) {
        console.log("err", error);
    }
})