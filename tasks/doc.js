"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('../ember-cli/lib/models/task');
const opn = require('opn');
exports.DocTask = Task.extend({
    run: function (keyword, search) {
        const searchUrl = search ? `https://angular.io/search/#stq=${keyword}&stp=1` :
            `https://angular.io/docs/ts/latest/api/#!?query=${keyword}`;
        return opn(searchUrl, { wait: false });
    }
});
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-68831-1021n36.2wxgktke29/angular-cli/tasks/doc.js.map