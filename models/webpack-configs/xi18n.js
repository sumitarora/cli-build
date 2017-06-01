"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const webpack_1 = require("@ngtools/webpack");
exports.getWebpackExtractI18nConfig = function (projectRoot, appConfig, genDir, i18nFormat, locale, outFile) {
    let exclude = [];
    if (appConfig.test) {
        exclude.push(path.join(projectRoot, appConfig.root, appConfig.test));
    }
    return {
        plugins: [
            new webpack_1.ExtractI18nPlugin({
                tsConfigPath: path.resolve(projectRoot, appConfig.root, appConfig.tsconfig),
                exclude: exclude,
                genDir: genDir,
                i18nFormat: i18nFormat,
                locale: locale,
                outFile: outFile,
            })
        ]
    };
};
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-46849-pzdb4t.6afzssv2t9/angular-cli/models/webpack-configs/xi18n.js.map