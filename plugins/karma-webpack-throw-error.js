"use strict";
// Force Webpack to throw compilation errors. Useful with karma-webpack when in single-run mode.
// Workaround for https://github.com/webpack-contrib/karma-webpack/issues/66
Object.defineProperty(exports, "__esModule", { value: true });
class KarmaWebpackThrowError {
    constructor() { }
    apply(compiler) {
        compiler.plugin('done', (stats) => {
            if (stats.compilation.errors.length > 0) {
                throw new Error(stats.compilation.errors.map((err) => err.message || err));
            }
        });
    }
}
exports.KarmaWebpackThrowError = KarmaWebpackThrowError;
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-47750-3wrgax.u599jurf6r/angular-cli/plugins/karma-webpack-throw-error.js.map