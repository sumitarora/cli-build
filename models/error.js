"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NgToolkitError extends Error {
    constructor(message) {
        super();
        if (message) {
            this.message = message;
        }
        else {
            this.message = this.constructor.name;
        }
    }
}
exports.NgToolkitError = NgToolkitError;
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-47750-3wrgax.u599jurf6r/angular-cli/models/error.js.map