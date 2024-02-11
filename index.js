"use strict";

const mockFs = require('mock-fs');
const fs = require('fs');
mockFs({
  '/b': 'foo',
});
console.log(fs.readdirSync('/'))
mockFs.restore();
