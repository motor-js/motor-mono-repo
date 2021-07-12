module.exports = [
  {
    name: "framework",
    type: "list",
    question: "Please select your React framework",
    choices: ['create-react-app'],
    dependencies: [],
    devDependencies: [],
    packageEntries: [],
  },
  {
  name: "template",
  type: "list",
  question: "Please select your Motor template",
  choices: ["Finance","Retail"],
  actions: [
    {
    choice: "Finance",
    dependencies: ["@motor-js/engine","@motor-js/nebula"],
    devDependencies: [],
    packageEntries: [],
  },
  {
    choice: "Retail",
    dependencies: ["@motor-js/engine"],
    devDependencies: [],
    packageEntries: [],
  }]
  },
  /*
  {
    name: "deployment",
    type: "list",
    question: "Please select your Qlik deploymeny type",
    choices: ['Qlik Sense SaaS'],
    dependencies: [],
    devDependencies: [],
    packageEntries: [],
  },
  {
    name: "tenant",
    question: "Please enter your tenant name (e.g. motor.eu.qlikcloud.com)",
    choices: [],
    dependencies: [],
    devDependencies: [],
    packageEntries: [],
  },
  {
    name: "appId",
    question: "Please enter your application id",
    choices: [],
    dependencies: [],
    devDependencies: [],
    packageEntries: [],
  },
  {
    name: "webIntId",
    question: "Please enter your web application id",
    choices: [],
    dependencies: [],
    devDependencies: [],
    packageEntries: [],
  },
  */
]

