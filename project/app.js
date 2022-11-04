import fastify from "fastify";
import cors from "@fastify/cors";
import * as candidateRoutes from './routes/candidate.routes.js';

const app = fastify({
  logger: true,
});

app.register(cors);
candidateRoutes.configRoutes(app);

async function bootstrap() {
  try {
    await app.listen({ port: 8080 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();