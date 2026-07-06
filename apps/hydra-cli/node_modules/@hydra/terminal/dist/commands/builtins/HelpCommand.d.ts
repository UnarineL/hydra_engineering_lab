import { Command } from "../contracts/Command.js";
import { CommandResult } from "../models/CommandResult.js";
import { ParsedCommand } from "../parser/ParsedCommand.js";
import { CommandRegistry } from "../registry/CommandRegistry.js";
/**
 * HYDRA I.OS
 * Help Command
 *
 * Displays all registered commands.
 */
export declare class HelpCommand implements Command {
    private readonly registry;
    readonly name = "help";
    readonly description = "Displays available commands.";
    constructor(registry: CommandRegistry);
    execute(_: ParsedCommand): CommandResult;
}
//# sourceMappingURL=HelpCommand.d.ts.map