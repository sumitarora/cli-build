"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack = require("webpack");
const webpack_xi18n_config_1 = require("../models/webpack-xi18n-config");
const app_utils_1 = require("../utilities/app-utils");
const Task = require('../ember-cli/lib/models/task');
const MemoryFS = require('memory-fs');
exports.Extracti18nTask = Task.extend({
    run: function (runTaskOptions) {
        const appConfig = app_utils_1.getAppFromConfig(runTaskOptions.app);
        const config = new webpack_xi18n_config_1.XI18nWebpackConfig({
            genDir: runTaskOptions.outputPath || appConfig.root,
            buildDir: '.tmp',
            i18nFormat: runTaskOptions.i18nFormat,
            locale: runTaskOptions.locale,
            outFile: runTaskOptions.outFile,
            verbose: runTaskOptions.verbose,
            progress: runTaskOptions.progress,
            app: runTaskOptions.app,
        }, appConfig).buildConfig();
        const webpackCompiler = webpack(config);
        webpackCompiler.outputFileSystem = new MemoryFS();
        return new Promise((resolve, reject) => {
            const callback = (err, stats) => {
                if (err) {
                    return reject(err);
                }
                if (stats.hasErrors()) {
                    reject();
                }
                else {
                    resolve();
                }
            };
            webpackCompiler.run(callback);
        })
            .catch((err) => {
            if (err) {
                this.ui.writeError('\nAn error occured during the i18n extraction:\n'
                    + ((err && err.stack) || err));
            }
        });
    }
});
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-68831-1021n36.2wxgktke29/angular-cli/tasks/extract-i18n.js.map