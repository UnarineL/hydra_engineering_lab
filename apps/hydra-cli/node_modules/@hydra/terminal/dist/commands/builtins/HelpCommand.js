import { CommandResult } from "../models/CommandResult.js";
/**
 * HYDRA I.OS
 * Help Command
 *
 * Displays all registered commands.
 */
export class HelpCommand {
    registry;
    name = "help";
    description = "Displays available commands.";
    constructor(registry) {
        this.registry = registry;
    }
    execute(_) {
        const output = this.registry
            .getAll()
            .map(command => `${command.name.padEnd(12)}${command.description}`)
            .join("\n");
        return CommandResult.success(output);
    }
}
//# sourceMappingURL=HelpCommand.js.map