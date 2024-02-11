"use strict";

const mockFs = require('mock-fs');
const fs = require('fs');
const cwd = process.cwd();
console.log(cwd);

mockFs({
  '/b': 'foo',

});
console.log(fs.readdirSync('/'))
console.log(fs.readdirSync(cwd))
mockFs.restore();
