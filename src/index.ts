import koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';


dotenv.config();

const app = new koa();

app.use(cors());
app.use(bodyParser());

const PORT: string = process.env.PORT || `3000`;


// routes

const server = app.listen(PORT, () => 
console.log(`Server running on port ${PORT} 🚀.`),
)

app.use(async (ctx) => (ctx.body = { msg: `Ẁelcome to this api!` }));

export = server;