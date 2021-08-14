#!/usr/bin/env node

import handleError from "../private/handleError.mjs";
import checkEngine from "../public/check-engine.mjs";

/**
 * Runs the `check-engine` CLI.
 * @kind function
 * @name checkEngineCli
 * @returns {Promise<void>} Resolves once the operation is done.
 * @ignore
 */
async function checkEngineCli() {
  try {
    checkEngine();
  } catch (err) {
    handleError(err);
  }
}

checkEngineCli();
