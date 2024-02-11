"use strict";

const mockFs = require('mock-fs');
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const posix_cwd = cwd.split(path.sep).join(path.posix.sep);
// const other = posix_cwd.replace(/^[A-Z]:/, '');
console.log(cwd, posix_cwd);

mockFs({
  [`${posix_cwd}/node_modules`]: mockFs.load(path.join(cwd, 'node_modules')),
}, {
  createCwd: false,
  createTmp: false,
});

console.log(fs.readdirSync('/'))
console.log(fs.readdirSync(cwd))
mockFs.restore();
