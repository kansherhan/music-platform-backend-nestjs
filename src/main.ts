import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as process from "process";

(async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
