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
  choices: ["Solar"],
  actions: [
    {
    choice: "Solar",
    dependencies1: [
      "@motor-js/engine@next",
      "@styled-system/theme-get",
      "classnames",
      "@motor-js/theme@next",
      "@motor-js/components@next",
      "react-feather",
      "react-router-dom@^5.2.0",
      "styled-bootstrap-grid",
      "styled-components",
      "styled-system",
      "tinycolor2",
    ],
    devDependencies: [],
    packageEntries: [],
    }]
  },
  {
    name: "deployment",
    type: "list",
    question: "Please select your Qlik deployment type",
    choices: ['Qlik Sense SaaS'],
  },
  {
    name: "tenant",
    question: "Please enter your tenant name (e.g. motor.eu.qlikcloud.com)",
  },
  {
    name: "appId",
    question: "Please enter your application id",
  },
  {
    name: "webIntId",
    question: "Please enter your web integration id",
  },
]

