"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve = require('resolve');
// require dependencies within the target project
function requireProjectModule(root, moduleName) {
    return require(resolve.sync(moduleName, { basedir: root }));
}
exports.requireProjectModule = requireProjectModule;
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-46092-p27j14.plxflxr/angular-cli/utilities/require-project-module.js.map