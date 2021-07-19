const shell = require("shelljs");
shell.config.silent = true;
const inquirer = require("inquirer");
const reactConfigList = require("./config");
const ora = require("ora");
const nodePlop = require('node-plop');
const chalk = require('chalk')

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
  const spinner = ora(chalk.magentaBright("🏃 Running create-react-app...")).start();

  return new Promise((resolve, reject) => {
    shell.exec(
      `npx create-react-app ${appName}`,
      () => {
        const cdRes = shell.cd(appName);

        if (cdRes.code !== 0) {
          console.log(chalk.redBright(`Error changing directory to: ${appName}`));
          reject();
        }

        spinner.succeed();
        resolve();
      }
    );
  });
};

const installPackages = async (configList, answers) => {
  let dependencies1 = [];
  let dependencies2 = [];
  let dependencies3 = [];
  let dependencies4 = [];
  let dependencies5 = [];
  let devDependencies = [];

  configList.forEach(config => {
    if(config.name === 'template') {
      const selected = config.actions.filter(p => { return  p.choice === answers.template})
      dependencies1 = selected[0].dependencies1 = [...dependencies1, ...selected[0].dependencies1];
    //  dependencies2 = selected[0].dependencies2 = [...dependencies2, ...selected[0].dependencies2];
    //  dependencies3 = selected[0].dependencies3 = [...dependencies3, ...selected[0].dependencies3];
    //  dependencies4 = selected[0].dependencies4 = [...dependencies4, ...selected[0].dependencies4];
    //  dependencies5 = selected[0].dependencies5 = [...dependencies5, ...selected[0].dependencies5];
      //devDependencies = [...devDependencies, ...selected[0].devDependencies];
    }
  })

  await new Promise(resolve => {
    const spinner = ora(chalk.magentaBright("🔍 Installing additional dependencies...")).start();
    shell.exec(`npm install --save ${dependencies1.join(" ")} --legacy-peer-deps`, () => {
     // shell.exec(`npm install --save ${dependencies2.join(" ")}`, () => {
       // shell.exec(`npm install --save  ${dependencies3.join(" ")}`, () => {
          console.log(dependencies3.join(" "))
          spinner.succeed();
          resolve();
          /*shell.exec(`npm install --save ${dependencies4.join(" ")}`, () => {
            console.log(dependencies4.join(" "))
            shell.exec(`npm install --save ${dependencies5.join(" ")}`, () => {
              console.log(dependencies5.join(" "))
  
            });;
          });
          */
    //    });
   //   });
    });
  });

  /*await new Promise(resolve => {
    const spinner = ora(chalk.magentaBright("🔍 Installing additional dev dependencies...")).start();

    shell.exec(`npm install --save-dev ${devDependencies.join(" ")}`, () => {
      spinner.succeed();
      resolve();
    });
  });*/

};

const addTemplates = (answers) => {

  const { tenant, appId, webIntId } = answers
  const spinner = ora("📁 Adding files..."); 

  return new Promise(resolve => {
    // load an instance of plop from a plopfile
    const plop = nodePlop(__dirname+`/plopfile.js`);

    // get a generator by name
    const basicAdd = plop.getGenerator("create-files");

    basicAdd.runActions({ tenant: tenant, appId: appId, webIntId: webIntId }).then(function () {
      spinner.succeed();
      resolve();
    }); 
  });

};

const commitGit = () => {
  const spinner = ora("🔒 Committing files to Git...");

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

//exports.answers = async (appName, appDirectory) => {
//  const { selectedConfigList, answers } = await askQuestions(appName, appDirectory);
//}

exports.create = async (appName, appDirectory) => {
  const { selectedConfigList, answers } = await askQuestions(appName, appDirectory);

  await createReactApp(appName);
  await installPackages(selectedConfigList, answers);
  /*  Inserting package entries descoped for first release */
  //await updatePackageDotJson(selectedConfigList);
  await addTemplates(answers);
  await commitGit();

  console.log(
`


🎉  Your React Motor Mashup has been created 🎉 


Get started with ...

`+chalk.cyanBright(`cd`)+ ` ${appName}`+`
`+chalk.cyanBright(`yarn start`)+`


Any questions? Reach out to us at` + chalk.cyanBright(` hello@motor-js.io`)+`
Read through our docs at ` + chalk.cyanBright(`https://docs.motor.so`)+`
Join our growing community at ` + chalk.cyanBright(`https://discord.com/invite/jmjx78N59b`)+`


`
);

  return true;
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