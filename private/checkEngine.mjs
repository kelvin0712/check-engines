import kleur from "kleur";
import semver from "semver";

/**
 * Check if the currently used engines are supported by the packages' engines
 * @kind function
 * @name checkEngine
 * @param {Array} supportedEngines an array of all supported engines
 * @param {object} listOfDependencies an object contains the list of currently used packages
 * @param {string} tree current node of the denpendency tree
 * @param {boolean} result result
 * @returns {boolean} Result of checking the supported engine
 */
async function checkEngine(
  supportedEngines,
  listOfDependencies,
  tree = "",
  result
) {
  Object.values(listOfDependencies).forEach((dependencyPackage) => {
    const packageTree = `${tree} ${kleur.red(dependencyPackage.name)} ${
      dependencyPackage.version
    }`;

    if (dependencyPackage.engines && dependencyPackage.engines.node)
      supportedEngines.forEach((engine) => {
        if (!semver.satisfies(engine, dependencyPackage.engines.node)) {
          console.error(
            `${packageTree} doesn't support engine ${kleur.green(
              engine
            )} (${kleur.red(dependencyPackage.engines.node)})`
          );

          result = true;
        }
      });

    if (Object.values(dependencyPackage.dependencies) !== 0)
      result = checkEngine(
        supportedEngines,
        dependencyPackage.dependencies,
        `${packageTree} ->`,
        result
      );
  });

  return !!result;
}

export default checkEngine;
