import childProcess from "child_process";

/**
 * Get a list of currently used packages
 * @kind function
 * @name getListOfPackages
 * @returns {Promise<string>} Resolve a promise of a list of all dependencies
 * @ignore
 */
function getListOfPackages() {
  return new Promise((resolve, reject) => {
    childProcess.exec(
      `npm list --json --depth=100 --long`,
      (err, stdout, stderr) => {
        if (err) reject(err);

        resolve(stdout ? JSON.parse(stdout) : stderr);
      }
    );
  });
}

export default getListOfPackages;
