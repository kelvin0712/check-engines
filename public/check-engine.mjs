import kleur from "kleur";
import { promises as fs } from "node:fs";
import checkEngine from "../private/checkEngine.mjs";
import getListOfPackages from "../private/getListOfPackages.mjs";
import getListOfSupportedEngines from "../private/getListOfSupportedEngines.mjs";
import handleError from "../private/handleError.mjs";

const packageConfig = JSON.parse(
  await fs.readFile(`${process.cwd()}/package.json`)
);

// eslint-disable-next-line no-console
console.log(kleur.green(`Checking ${process.cwd()}/package.json:`));

/**
 * Check engine
 * [ECMAScript module exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
 * in a project. `.gitignore` files are used to ignore files.
 * @kind function
 * @name main
 * @example <caption>Ways to `import`.</caption>
 *
 * ```js
 * import checkEngine from "check-engine/public/check-engine.mjs";
 * ```
 */
export async function main() {
  if (!packageConfig.engines || !packageConfig.engines.node)
    handleError(new Error("engines.node is not defined"));

  try {
    const listOfSupportedEngines = await getListOfSupportedEngines(
      packageConfig
    );

    const listOfPackages = await getListOfPackages();

    if (!checkEngine(listOfSupportedEngines, listOfPackages.dependencies))
      // eslint-disable-next-line no-console
      console.log(kleur.green("No problems detected!"));
    // eslint-disable-next-line no-process-exit
    else process.exit(1);
  } catch (err) {
    handleError(err);
  }
}
