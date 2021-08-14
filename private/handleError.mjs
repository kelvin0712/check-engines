/**
 * Handle error
 * @kind function
 * @name handleError
 * @param {Error} error Error object
 */
function handleError(error) {
  if (error) {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
}

export default handleError;
