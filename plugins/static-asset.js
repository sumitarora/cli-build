"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StaticAssetPlugin {
    constructor(name, contents) {
        this.name = name;
        this.contents = contents;
    }
    apply(compiler) {
        compiler.plugin('emit', (compilation, cb) => {
            compilation.assets[this.name] = {
                size: () => this.contents.length,
                source: () => this.contents,
            };
            cb();
        });
    }
}
exports.StaticAssetPlugin = StaticAssetPlugin;
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-46092-p27j14.plxflxr/angular-cli/plugins/static-asset.js.map