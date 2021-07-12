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
    "finance-motor/src/styled/*",
    "finance-motor/src/App.js",
    "finance-motor/src/index.js",
  ]

  plop.addHelper('cwd', (p) => process.cwd());

  plop.setGenerator("finance-motor", {

    // Succintly describes what generator does.
    description: "Copy components",

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
    ]

  } );
};


