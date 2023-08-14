import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get('/hello', async () => {
    const test = knex('sqlite_schema').select('*');
    return test;
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('combat ready');

})