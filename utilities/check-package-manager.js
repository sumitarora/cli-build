"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const child_process_1 = require("child_process");
const config_1 = require("../models/config");
const Promise = require('../ember-cli/lib/ext/promise');
const execPromise = Promise.denodeify(child_process_1.exec);
const packageManager = config_1.CliConfig.fromGlobal().get('packageManager');
function checkYarnOrCNPM() {
    if (packageManager !== 'default') {
        return Promise.resolve();
    }
    return Promise
        .all([checkYarn(), checkCNPM()])
        .then((data) => {
        const [isYarnInstalled, isCNPMInstalled] = data;
        if (isYarnInstalled && isCNPMInstalled) {
            console.log(chalk.yellow('You can `ng set --global packageManager=yarn` '
                + 'or `ng set --global packageManager=cnpm`.'));
        }
        else if (isYarnInstalled) {
            console.log(chalk.yellow('You can `ng set --global packageManager=yarn`.'));
        }
        else if (isCNPMInstalled) {
            console.log(chalk.yellow('You can `ng set --global packageManager=cnpm`.'));
        }
    });
}
exports.checkYarnOrCNPM = checkYarnOrCNPM;
function checkYarn() {
    return execPromise('yarn --version')
        .then(() => true, () => false);
}
function checkCNPM() {
    return execPromise('cnpm --version')
        .then(() => true, () => false);
}
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-68831-1021n36.2wxgktke29/angular-cli/utilities/check-package-manager.js.map