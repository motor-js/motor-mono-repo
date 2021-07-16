
module.exports = function (plop) {
  
  const templateFiles = [
    "finance-motor/src/components/**/**/*",
    "finance-motor/src/containers/**/**/*",
    "finance-motor/src/css/*",
    "finance-motor/src/hooks/*",
    "finance-motor/src/layouts/**/*",
    "finance-motor/src/methods/*",
    "finance-motor/src/pages/*",
    "finance-motor/src/settings/*",
    "finance-motor/src/theme/*",
    "finance-motor/src/util/*",
    "finance-motor/src/App.js",
    "finance-motor/src/index.css",
    "finance-motor/src/index.js",
    "finance-motor/src/reportWebVitals.js",
    "finance-motor/src/setupTests.js",
  ]

  plop.addHelper('cwd', (p) => process.cwd());

  plop.setGenerator("create-files", {

    // Succintly describes what generator does.
    description: "Create components",

    // List of actions to take.
    // Here we "add" new files from our templates or boilerplates.
    actions: [
      {
        name: "addMany",
        type: "addMany",
        destination: '/{{cwd}}',
        templateFiles: templateFiles,
        force: true
      },
      {
        name: "addConfig",
        type: "add",
        path: '/{{cwd}}/src/settings/index.js',
        templateFile: 'plop-templates/qlikConfig.js.hbs',
        force: true
      },
    ]

  });

};


