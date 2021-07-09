module.exports = function (plop) {
  
    const templateFiles = [
      "plop-templates/test.js",
    ]
  
    // Declare a new generator called "newApp" for use with our react-redux-boilerplate app
    plop.setGenerator( "newApp", {
  
      // Succintly describes what generator does.
      description: "Create a new lerna package aka new app directory",
  
      // Get inputs from the user.
      // That's Inquirer.js doing the job behind the hood.
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is your app name?"
        }
      ],
  
      // List of actions to take.
      // Here we "add" new files from our templates or boilerplates.
      actions: [
        {
          type: "addMany",
          path: 'src/{{name}}.js',
          templateFiles: templateFiles
        },
      ]
  
    } );
  };
