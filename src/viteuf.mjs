#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import { execSync } from "child_process";

const handleErrors = (err) => {
  console.error("\x1b[31m", "Error:", err);
  process.exit(1);
};

function viteuf() {
  console.log("\x1b[36m%s\x1b[0m", "🚀✍️ Viteuf! ✨");
  console.log("\x1b[36m%s\x1b[0m", "Let's create a new project...");
}

viteuf();
// Define __dirname for ES6 modules
const __dirname = new URL('..', import.meta.url).pathname;

// Populate choices with directory names
const CHOICES = fs.readdirSync(`${__dirname}/templates`);

// Define questions for CLI prompts
const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-_\d])+$/.test(input)) return true;
      return 'Project name may only include letters, numbers, underscores, and hashes.';
    },
  },
];

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectName = answers['project-name'];
  const projectChoice = answers['project-choice'];
  const templatePath = `${__dirname}/templates/${projectChoice}`;
  const projectPath = `${CURR_DIR}/${projectName}`;

  if (fs.existsSync(projectPath)) {
    return console.error("\x1b[31m", "Project with this name already exists.");
  }

  fs.mkdirSync(projectPath);
  createDirectoryContents(templatePath, projectName, projectPath, projectName);
  
  // Install dependencies
  console.log("\x1b[33m%s\x1b[0m", "Installing dependencies...");
  execSync(`cd ${projectName} && npm i`, { stdio: "inherit" });
  console.log("\x1b[32m%s\x1b[0m", "Done! Happy Hacking!");
}).catch(handleErrors);

function createDirectoryContents(templatePath, newProjectPath, CURR_DIR, projectName) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf8');

      // Rename 'Component' in file content to projectName
      contents = contents.replace(/Component/g, projectName);

      const newFileName = file.replace('Component', projectName);
      const writePath = `${CURR_DIR}/${newFileName}`;

      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      const newDirPath = `${CURR_DIR}/${file}`;
      fs.mkdirSync(newDirPath);

      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`, newDirPath, projectName);
    }
  });

  // Check if the path exists to avoid errors
  const componentPath = `${CURR_DIR}/src/Component`;
  if (fs.existsSync(componentPath)) {
    renameComponent(componentPath, `${CURR_DIR}/src`, projectName);
  }
}

// Adjusted to take CURR_DIR and projectName
function renameComponent(templatePath, CURR_DIR, projectName) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf8');

      contents = contents.replace(/Component/g, projectName);

      const newFileName = file.replace('Component', projectName);
      const writePath = `${CURR_DIR}/${projectName}/${newFileName}`;

      fs.writeFileSync(writePath, contents, 'utf8');
    }
  });

  const oldPath = `${CURR_DIR}/${newProjectPath}/src/Component`;
  const newPath = `${CURR_DIR}/${newProjectPath}/src/${projectName}`;
  fs.renameSync(oldPath, newPath);
}


  // Install dependencies
  console.log("\x1b[33m%s\x1b[0m", "Installing dependencies...");
  execSync(`cd ${projectName} && npm i`, { stdio: "inherit" });
  console.log("\x1b[32m%s\x1b[0m", "Done! Happy Hacking!");