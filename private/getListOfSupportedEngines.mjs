import fetch from "node-fetch";
import semver from "semver";
import handleError from "./handleError.mjs";

/**
 * Get a list of supported engines
 * @kind function
 * @name getListOfSupportedEngines
 * @param {string} packageConfig a JSON string of package.json file in current working directory
 * @returns {Promise<Array<string>>} Resolve a promise of an array of string include all the supported engines
 * @ignore
 */
async function getListOfSupportedEngines(packageConfig) {
  const listOfEngines = await fetch("https://nodejs.org/dist/")
    .then((response) => response.buffer())
    .then((buffer) => buffer.toString("utf8"))
    .catch((err) => handleError(err));

  const regex = /([0-9]+\.[0-9]+\.[0-9]+)\/<\/a>/gu;

  const supportedEngines = [];
  let matchResult;

  while ((matchResult = regex.exec(listOfEngines)) != null)
    if (semver.satisfies(matchResult[1], packageConfig.engines.node))
      supportedEngines.push(matchResult[1]);

  return supportedEngines;
}

export default getListOfSupportedEngines;
