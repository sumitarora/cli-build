"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const dynamic_path_parser_1 = require("./dynamic-path-parser");
function resolveModulePath(moduleNameFromFlag, project, projectRoot, appConfig) {
    let baseModuleName = moduleNameFromFlag;
    let parentFolders = '';
    // If it's a full path from the cwd, we use it as is.
    if (fs.existsSync(moduleNameFromFlag) && fs.statSync(moduleNameFromFlag).isFile()) {
        return path.resolve(moduleNameFromFlag);
    }
    if (baseModuleName.includes(path.sep)) {
        const splitPath = baseModuleName.split(path.sep);
        baseModuleName = splitPath.pop();
        parentFolders = splitPath.join(path.sep);
    }
    if (baseModuleName.includes('.')) {
        baseModuleName = baseModuleName.replace(/(\.module)?(\.ts)?$/, '');
    }
    const baseModuleWithFileSuffix = `${baseModuleName}.module.ts`;
    const moduleRelativePath = path.join(parentFolders, baseModuleWithFileSuffix);
    let fullModulePath = buildFullPath(project, moduleRelativePath, appConfig, projectRoot);
    if (!fs.existsSync(fullModulePath)) {
        const moduleWithFolderPrefix = path.join(parentFolders, baseModuleName, baseModuleWithFileSuffix);
        fullModulePath = buildFullPath(project, moduleWithFolderPrefix, appConfig, projectRoot);
    }
    if (!fs.existsSync(fullModulePath)) {
        throw 'Specified module does not exist';
    }
    return fullModulePath;
}
exports.resolveModulePath = resolveModulePath;
function buildFullPath(project, relativeModulePath, appConfig, projectRoot) {
    const dynamicPathOptions = {
        project,
        entityName: relativeModulePath,
        appConfig,
        dryRun: false
    };
    const parsedPath = dynamic_path_parser_1.dynamicPathParser(dynamicPathOptions);
    const fullModulePath = path.join(projectRoot, parsedPath.dir, parsedPath.base);
    return fullModulePath;
}
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11752-80737-h4wwoz.f35tye3ik9/angular-cli/utilities/resolve-module-file.js.map