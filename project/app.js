import fastify from "fastify";
import * as candidateRoutes from './routes/candidate.routes.js';

const app = fastify({
  logger: true,
});

candidateRoutes.configRoutes(app);

async function bootstrap() {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();