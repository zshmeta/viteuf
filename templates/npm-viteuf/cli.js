#!/usr/bin/env node

// Import main functionality
const mainFunction = require('./src/index');

// Parse CLI arguments, if any
const args = process.argv.slice(2);

// Invoke main functionality
mainFunction(args);
