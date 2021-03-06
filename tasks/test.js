"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const config_1 = require("../models/config");
const require_project_module_1 = require("../utilities/require-project-module");
const Task = require('../ember-cli/lib/models/task');
const SilentError = require('silent-error');
exports.default = Task.extend({
    run: function (options) {
        const projectConfig = config_1.CliConfig.fromProject().config;
        const projectRoot = this.project.root;
        if (projectConfig.project && projectConfig.project.ejected) {
            throw new SilentError('An ejected project cannot use the build command anymore.');
        }
        return new Promise((resolve) => {
            const karma = require_project_module_1.requireProjectModule(projectRoot, 'karma');
            const karmaConfig = path.join(projectRoot, options.config ||
                config_1.CliConfig.getValue('test.karma.config'));
            let karmaOptions = Object.assign({}, options);
            // Convert browsers from a string to an array
            if (options.browsers) {
                karmaOptions.browsers = options.browsers.split(',');
            }
            karmaOptions.angularCli = {
                codeCoverage: options.codeCoverage,
                sourcemaps: options.sourcemaps,
                progress: options.progress,
                poll: options.poll,
                app: options.app
            };
            // Assign additional karmaConfig options to the local ngapp config
            karmaOptions.configFile = karmaConfig;
            // :shipit:
            const karmaServer = new karma.Server(karmaOptions, resolve);
            karmaServer.start();
        });
    }
});
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11752-80737-h4wwoz.f35tye3ik9/angular-cli/tasks/test.js.map