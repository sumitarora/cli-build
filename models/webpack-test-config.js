"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpackMerge = require('webpack-merge');
const webpack_config_1 = require("./webpack-config");
const webpack_configs_1 = require("./webpack-configs");
class WebpackTestConfig extends webpack_config_1.NgCliWebpackConfig {
    constructor(testOptions, appConfig) {
        super(testOptions, appConfig);
        this.testOptions = testOptions;
    }
    buildConfig() {
        let webpackConfigs = [
            webpack_configs_1.getCommonConfig(this.wco),
            webpack_configs_1.getStylesConfig(this.wco),
            this.getTargetConfig(this.wco),
            webpack_configs_1.getNonAotTestConfig(this.wco),
            webpack_configs_1.getTestConfig(this.testOptions)
        ];
        this.config = webpackMerge(webpackConfigs);
        return this.config;
    }
}
exports.WebpackTestConfig = WebpackTestConfig;
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11752-80737-h4wwoz.f35tye3ik9/angular-cli/models/webpack-test-config.js.map