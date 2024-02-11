"use strict";

const mockFs = require('mock-fs');
const fs = require('fs');
mockFs();
console.log(fs.readdirSync('/'))
mockFs.restore();
