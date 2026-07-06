import { CommandResult } from "../models/CommandResult.js";
import { ParsedCommand } from "../parser/ParsedCommand.js";
import { CommandRegistry } from "../registry/CommandRegistry.js";
/**
 * HYDRA I.OS
 * Command Executor
 *
 * Resolves and executes terminal commands.
 */
export declare class CommandExecutor {
    private readonly registry;
    /**
     * Creates a command executor.
     */
    constructor(registry: CommandRegistry);
    /**
     * Executes a parsed command.
     */
    execute(command: ParsedCommand): CommandResult;
}
//# sourceMappingURL=CommandExecutor.d.ts.map