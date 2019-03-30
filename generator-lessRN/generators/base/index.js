const Base = require("yeoman-generator");

class BaseGenerator extends Base {
  initializing() {}

  prompting() {
    const config = this.fs.readJSON(this.destinationPath("package.json"));
    return this.prompt([
      {
        type: "input",
        name: "appName",
        message: "Your react native app directory name",
        default: config.name
      }
    ]).then(answers => {
      this.answers = answers;
    });
  }

  install() {
    this.yarnInstall(
      [
        "@babel/runtime",
        "react-native-gesture-handler",
        "redux",
        "react-redux",
        "redux-logger",
        "redux-persist",
        "redux-thunk",
        "react-navigation",
        "axios",
        "moment",
        "react-native-splash-screen",
        "react-native-keyboard-aware-scroll-view",
        "react-native-dropdownalert",
        "react-native-swipeout"
      ],
      { cwd: this.destinationRoot() }
    );
  }

  writing() {
    this.fs.delete(this.destinationPath("__tests__"));
    this.fs.copyTpl(
      this.templatePath("**/*.js"),
      this.destinationPath(""),
      this.answers
    );
    this.fs.copyTpl(
      this.templatePath("**/*.otf"),
      this.destinationPath(""),
      this.answers
    );
    this.fs.copyTpl(
      this.templatePath("**/*.png"),
      this.destinationPath(""),
      this.answers
    );
    this.fs.extendJSON("package.json", {
      rnpm: {
        assets: ["./src/assets/fonts/"]
      }
    });
  }

  end() {
    this.config.set("base", true);
    this.config.save();
  }
}

module.exports = BaseGenerator;
