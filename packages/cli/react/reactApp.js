require("colors");
const shell = require("shelljs");
shell.config.silent = true;
const inquirer = require("inquirer");
const fse = require("fs-extra");
const reactConfigList = require("./config");
const set = require("lodash.set");
const ora = require("ora");
const nodePlop = require('node-plop');


const askQuestions = async () => {
  const selectedConfigList = [];

  const questions = reactConfigList.map(config => ({
    name: config.name,
    type: config.type,
    message: config.question,
    choices: config.choices,
    actions: config.actions
  }));

  const answers = await inquirer.prompt(questions);

  reactConfigList.forEach(config => {
      selectedConfigList.push(config);
  });

  return { selectedConfigList, answers}
};


const createReactApp = appName => {
  const spinner = ora("Running create-react-app...".brightMagenta).start();

  return new Promise((resolve, reject) => {
    shell.exec(
      `npx create-react-app ${appName}`,
      () => {
        const cdRes = shell.cd(appName);

        if (cdRes.code !== 0) {
          console.log(`Error changing directory to: ${appName}`.brightRed);
          reject();
        }

        spinner.succeed();
        resolve();
      }
    );
  });
};

const installPackages = async (configList, answers) => {
  let dependencies = [];
  let devDependencies = [];

  configList.forEach(config => {
    if(config.name === 'template') {
      const selected = config.actions.filter(p => { return  p.choice === answers.template})
      dependencies = selected[0].dependencies = [...dependencies, ...selected[0].dependencies];
      devDependencies = [...devDependencies, ...selected[0].devDependencies];
    }
  })

  await new Promise(resolve => {
    const spinner = ora("Installing additional dependencies...".brightMagenta).start();

    shell.exec(`npm install --save ${dependencies.join(" ")}`, () => {
      spinner.succeed();
      resolve();
    });
  });

  await new Promise(resolve => {
    const spinner = ora("Installing additional dev dependencies...".brightMagenta).start();

    shell.exec(`npm install --save-dev ${devDependencies.join(" ")}`, () => {
      spinner.succeed();
      resolve();
    });
  });

};

/*
const updatePackageDotJson = (configList) => {
  const spinner = ora("Updating package.json scripts...".brightMagenta);

  const packageEntries = configList.reduce(
    (acc, val) => [...acc, ...val.packageEntries],
    []
  );

  console.log(configList)
  console.log(packageEntries)
  
  return new Promise((resolve) => {
    const rawPackage = fse.readFileSync("package.json");
    const package = JSON.parse(rawPackage);

    packageEntries.forEach((script) => {
      // Lodash `set` allows us to dynamically set nested keys within objects
      // i.e. scripts.foo = "bar" will add an entry to the foo field in scripts
      set(package, script.key, script.value);
    });

    fse.writeFile("package.json", JSON.stringify(package, null, 2), function (
      err
    ) {
      if (err) {
        spinner.fail();
        return console.log(err);
      }

      spinner.succeed();
      resolve();
    });
  });
  
};
*/

const addTemplates = () => {

  const spinner = ora("Adding files...".brightMagenta);

  return new Promise(resolve => {
  // load an instance of plop from a plopfile
  const plop = nodePlop(__dirname+`/plopfile.js`);
  // get a generator by name
  const basicAdd = plop.getGenerator("finance-motor");
  
    basicAdd.runActions({name: 'addMany'}).then(function (results) {
      // do something after the actions have run
      //console.log('results: ',results)
      spinner.succeed();
      resolve();
    });

  });
};

const commitGit = () => {
  const spinner = ora("Committing files to Git...".brightMagenta);

  return new Promise(resolve => {
    shell.exec(
      'git add . && git commit --no-verify -m "Secondary commit from Create Frontend App"',
      () => {
        spinner.succeed();
        resolve();
      }
    );
  });
};

exports.create = async (appName, appDirectory) => {
  const { selectedConfigList, answers } = await askQuestions(appName, appDirectory);
  await createReactApp(appName);
  await installPackages(selectedConfigList, answers);
  /*  Inserting package entries descoped for first release */
  //await updatePackageDotJson(selectedConfigList);
  await addTemplates(selectedConfigList);
  await commitGit();

  console.log(
    `Your React Motor Mashup has been created 🎉. cd into ${appName} to get started.`.brightGreen
  );

  return true;
};

