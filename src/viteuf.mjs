#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from 'url';
import path from 'path';

const handleErrors = (err) => {
  console.error("\x1b[31m", "Error:", err);
  process.exit(1);
};

const viteuf = () => {
  console.log("\x1b[36m%s\x1b[0m", "🚀✍️ Viteuf! ✨");
  console.log("\x1b[36m%s\x1b[0m", "Let's create a new project...");

  // Define __dirname for ES6 modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const templatesPath = `${__dirname}/../templates`;
  let CHOICES = [];

  if (fs.existsSync(templatesPath)) {
    CHOICES = fs.readdirSync(templatesPath);
  } else {
    console.error("\x1b[31m", "Error: 'templates' directory does not exist.");
    process.exit(1);
  }

  // Define questions for CLI prompts
  const QUESTIONS = [
    {
      name: 'project-choice',
      type: 'list',
      message: 'Choose a project template:',
      choices: CHOICES,
    },
    {
      name: 'project-name',
      type: 'input',
      message: 'Project name:',
      validate: (input) => /^([A-Za-z\-_\d])+$/.test(input) || 'Project name may only include letters, numbers, underscores, and hashes.',
    },
  ];

  const CURR_DIR = process.cwd();

  inquirer.prompt(QUESTIONS).then((answers) => {
    const projectName = answers['project-name'];
    const projectChoice = answers['project-choice'];
    const templatePath = `${templatesPath}/${projectChoice}`;
    const projectPath = `${CURR_DIR}/${projectName}`;

    if (fs.existsSync(projectPath)) {
      console.error("\x1b[31m", "Project with this name already exists.");
      process.exit(1);
    }

    fs.mkdirSync(projectPath);
    createDirectoryContents(templatePath, projectPath, projectName);

    // Install dependencies
    console.log("\x1b[33m%s\x1b[0m", "Installing dependencies...");
    execSync(`cd ${projectName} && npm i`, { stdio: "inherit" });
    console.log("\x1b[32m%s\x1b[0m", "Done! Happy Hacking!");
  }).catch(handleErrors);
};

function createDirectoryContents(templatePath, newProjectPath, projectName) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, 'utf8');
      contents = contents.replace(/Component/g, projectName);
      const newFileName = file.replace('Component', projectName);
      const writePath = `${newProjectPath}/${newFileName}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      const newDirPath = `${newProjectPath}/${file}`;
      fs.mkdirSync(newDirPath);
      createDirectoryContents(`${templatePath}/${file}`, newDirPath, projectName);
    }
  });

  // Rename component directory if it exists
  const componentPath = `${newProjectPath}/src/Component`;
  if (fs.existsSync(componentPath)) {
    const newComponentPath = `${newProjectPath}/src/${projectName}`;
    fs.renameSync(componentPath, newComponentPath);
  }
}

export default viteuf
