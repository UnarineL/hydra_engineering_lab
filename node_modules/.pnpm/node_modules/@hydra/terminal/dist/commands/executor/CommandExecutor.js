import { CommandResult } from "../models/CommandResult.js";
/**
 * HYDRA I.OS
 * Command Executor
 *
 * Resolves and executes terminal commands.
 */
export class CommandExecutor {
    registry;
    /**
     * Creates a command executor.
     */
    constructor(registry) {
        this.registry = registry;
    }
    /**
     * Executes a parsed command.
     */
    execute(command) {
        // Ignore empty input (user pressed Enter).
        if (command.command.length === 0) {
            return CommandResult.success("");
        }
        const executable = this.registry.get(command.command);
        if (!executable) {
            return CommandResult.failure(`Unknown command: ${command.command}`);
        }
        return executable.execute(command);
    }
}
//# sourceMappingURL=CommandExecutor.js.map