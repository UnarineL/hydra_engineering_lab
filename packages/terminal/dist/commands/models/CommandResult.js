/**
 * HYDRA I.OS
 * Command Result
 *
 * Represents the outcome of executing
 * a terminal command.
 */
export class CommandResult {
    /**
     * Indicates whether the command
     * completed successfully.
     */
    success;
    /**
     * Output returned by the command.
     */
    output;
    /**
     * Creates a command result.
     */
    constructor(success, output) {
        this.success = success;
        this.output = output;
    }
    /**
     * Creates a successful command result.
     */
    static success(output) {
        return new CommandResult(true, output);
    }
    /**
     * Creates a failed command result.
     */
    static failure(output) {
        return new CommandResult(false, output);
    }
}
//# sourceMappingURL=CommandResult.js.map