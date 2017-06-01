"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('../ember-cli/lib/models/task');
const chalk = require("chalk");
const child_process_1 = require("child_process");
exports.default = Task.extend({
    run: function () {
        const ui = this.ui;
        let packageManager = this.packageManager;
        if (packageManager === 'default') {
            packageManager = 'npm';
        }
        return new Promise(function (resolve, reject) {
            ui.writeLine(chalk.green(`Installing packages for tooling via ${packageManager}.`));
            let installCommand = `${packageManager} install`;
            if (packageManager === 'npm') {
                installCommand = `${packageManager} --quiet install`;
            }
            child_process_1.exec(installCommand, (err, _stdout, stderr) => {
                if (err) {
                    ui.writeLine(stderr);
                    ui.writeLine(chalk.red('Package install failed, see above.'));
                    reject();
                }
                else {
                    ui.writeLine(chalk.green(`Installed packages for tooling via ${packageManager}.`));
                    resolve();
                }
            });
        });
    }
});
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-46092-p27j14.plxflxr/angular-cli/tasks/npm-install.js.map