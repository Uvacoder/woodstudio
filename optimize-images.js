import path from "path";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const img = await imagemin(["src/images/*.{jpg,png}"], {
    destination: "public/photos",
    plugins: [imageminWebp({ quality: 70 })],
  });

  console.log("Images optimized");
  console.log(img);
})();
