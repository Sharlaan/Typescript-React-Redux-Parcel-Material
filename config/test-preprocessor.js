import { transpile } from "typescript";
import { compilerOptions } from "../tsconfig.json";

export default {
  process(src, path) {
    if (/\.(ts|tsx|js)$/.test(path)) {
      return transpile(src, compilerOptions, path, []);
    }
    return src;
  },
};
