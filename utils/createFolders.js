import fs from "fs";
import path from "path";

class BaseError extends Error {
  code = 1;
  constructor(message) {
    super();
    this.message = message
  }
}

try {
  const [ dir ] = process.argv.slice(2);
  
  const isCorrectDir = /^\d{2}\.[\w\s]+$/.test(dir);
  if(!isCorrectDir) throw new BaseError("El formato no es correcto");
  if(fs.existsSync(dir)) throw new BaseError("El directorio ya existe");

  fs.mkdirSync(dir);
  fs.writeFileSync(path.join(dir, "index.js"), "");
  fs.writeFileSync(path.join(dir, "index.ts"), "");
  fs.writeFileSync(path.join(dir, "README.md"), "");
} catch (error) {
  if(error instanceof BaseError){
    console.log(error.message);
    process.exit(error.code);
  } else {
    console.log(error.message);
    process.exit(2)
  }
}