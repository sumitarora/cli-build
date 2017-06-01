"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command = require('../ember-cli/lib/models/command');
const SilentError = require('silent-error');
const DestroyCommand = Command.extend({
    name: 'destroy',
    aliases: ['d'],
    works: 'insideProject',
    hidden: true,
    anonymousOptions: [
        '<blueprint>'
    ],
    run: function () {
        return Promise.reject(new SilentError('The destroy command is not supported by Angular CLI.'));
    }
});
exports.default = DestroyCommand;
DestroyCommand.overrideCore = true;
//# sourceMappingURL=/private/var/folders/70/r7lbk4zj0t791wwf4lxrn87c0000gn/t/angular-cli-builds11751-69647-oltgw6.ronmfv42t9/angular-cli/commands/destroy.js.map