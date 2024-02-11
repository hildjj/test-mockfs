"use strict";

const mockFs = require('mock-fs');
const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
console.log(cwd);
const posix_cwd = cwd.split(path.sep).join(path.posix.sep);
const other = posix_cwd.replace(/^[A-Z]:/, '');

mockFs({
  '/b': 'foo',
  [`${posix_cwd}/bar`]: 'bar',
  [`${other}/goo`]: 'bag',
});
console.log(fs.readdirSync('/'))
console.log(fs.readdirSync(cwd))
mockFs.restore();
