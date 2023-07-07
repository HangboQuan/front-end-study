const express = require("express");
const axios = require("axios");

const app = express();

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.flushHeaders();

    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const apiKey = "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";

    const params = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "帮我制定一份详细的去北京旅游的指南" }],
        stream: true
    };

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
    };

    const eventSource = axios.post(apiUrl, params, config, { responseType: "stream" });
    console.log(eventSource);

    eventSource.then((response) => {
        response.data.on('data', (chunk) => {
            const message = chunk.toString();

            res.write(`data: ${message}\n\n`);
            res.flush();
        })
    }).catch((error) => {
        console.error(error);
        res.end();
    });
});


app.listen(8848, () => {
    console.log("Server listening on port 8848");
});
