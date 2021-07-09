module.exports = function (plop) {
  
  const templateFiles = [
    "motor-starter/src/components/breadcrumb/index.jsx",
  ]

  plop.addHelper('cwd', (p) => process.cwd());

  plop.setGenerator( "newApp", {

    // Succintly describes what generator does.
    description: "Copies components",

    // List of actions to take.
    // Here we "add" new files from our templates or boilerplates.
    actions: [
      {
        name: "add",
        type: "addMany",
        destination: '/{{cwd}}',
        templateFiles: templateFiles
      },
    ]

  } );
};
