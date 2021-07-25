
module.exports = function (plop) {
  
  const templateFiles = [
    "solar-motor/src/components/**/**/*",
    "solar-motor/src/containers/**/**/*",
    "solar-motor/src/css/*",
    "solar-motor/src/hooks/*",
    "solar-motor/src/layouts/**/*",
    "solar-motor/src/methods/*",
    "solar-motor/src/pages/*",
    "solar-motor/src/settings/*",
    "solar-motor/src/theme/*",
    "solar-motor/src/util/*",
    "solar-motor/src/App.js",
    "solar-motor/src/index.css",
    "solar-motor/src/index.js",
    "solar-motor/src/reportWebVitals.js",
    "solar-motor/src/setupTests.js",
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


