#!/usr/bin/env node
const inquirer = require("inquirer");
const reactApp = require("./react/reactApp");

const askAppQuestions = () => {
  const questions = [
    {
      type: "input",
      name: "appName",
      message:
        "What name do you want to give your app (should be in kebab case format: `your-app-name`)?"
    },
    {
      type: "list",
      name: "qlikDeploymentType",
      message: "What is your Qlik Deployment Type",
      choices: ["Qlik Sense SaaS"]
    },
    {
      type: "list",
      name: "templateName",
      message: "Please select a mashup template",
      choices: ["styled-components"]
    },
    {
      type: "input",
      name: "host",
      message: "What is your host name (e.g. motor.eu.qlikcloud.com)",
    },
    {
      type: "input",
      name: "app",
      message: "What is the app id you want to connect to?",
    },
    {
      type: "input",
      name: "webIntId",
      message: "What is your web integration id, created in the management console?",
    },
  ];
  return inquirer.prompt(questions);
};


const run = async () => {
  const answer = await askAppQuestions();
  const { appName, qlikDeploymentType, templateName, host, app, webIntId } = answer;

  // Todo: Perform some validation on appName here to make sure it's kebab case
  if (!appName || appName.length <= 0) {
    console.log(`Please enter a valid name for your new app.`.red);
    return process.exit(0);
  }

  const appDirectory = `${process.cwd()}/${appName}`;

  const res = await app.create(appName, appDirectory);

  if (!res) {
    console.log("There was an error generating your app.".red);
    return process.exit(0);
  }

  return process.exit(0);
};

run();