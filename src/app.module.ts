import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    MongooseModule.forRoot(
      "mongodb+srv://admin:Uu4pPawVfpozxKsg@music-platform.ozl6hbq.mongodb.net/?retryWrites=true&w=majority&appName=music-platform",
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
