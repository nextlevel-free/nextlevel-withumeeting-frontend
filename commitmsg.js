#!/usr/bin/env node

const { execSync } = require("child_process");

try {
  execSync("commitlint -E HUSKY_GIT_PARAMS", { stdio: "inherit" });
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
