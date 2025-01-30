import { createClient } from "redis";

const RedisClient = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD
})

RedisClient.on("connect", () => {
    console.log("Connected to Redis");
});

RedisClient.on("error", (err) => {
    console.log(`Redis Client Error: ${err}`);
});

RedisClient.on("end", () => {
    console.log("Redis Client Disconnected");
});

export { RedisClient }