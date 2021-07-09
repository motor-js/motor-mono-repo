module.exports = function (plop) {
  
  const templateFiles = [
    "motor-starter/src/components/breadcrumb/*",
    "motor-starter/src/components/dashboard-one/chart-placeholder/*",
    "motor-starter/src/components/dashboard-one/kpi-placeholder/*",
    "motor-starter/src/components/dashboard-two/**/*",
    "motor-starter/src/components/dashboard-three/**/*",
    "motor-starter/src/components/forms/form-elements/**/*",
    "motor-starter/src/components/forms/input-group/*",
    "motor-starter/src/components/grid/*",
    "motor-starter/src/components/logo/*",
    "motor-starter/src/components/search-bar/*",
    "motor-starter/src/components/static/*",
  ]

  plop.addHelper('cwd', (p) => process.cwd());

  plop.setGenerator("newApp", {

    // Succintly describes what generator does.
    description: "Copy components",

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


