/**
 * HYDRA I.OS
 * Command Result
 *
 * Represents the outcome of executing
 * a terminal command.
 */
export declare class CommandResult {
    /**
     * Indicates whether the command
     * completed successfully.
     */
    readonly success: boolean;
    /**
     * Output returned by the command.
     */
    readonly output: string;
    /**
     * Creates a command result.
     */
    constructor(success: boolean, output: string);
    /**
     * Creates a successful command result.
     */
    static success(output: string): CommandResult;
    /**
     * Creates a failed command result.
     */
    static failure(output: string): CommandResult;
}
//# sourceMappingURL=CommandResult.d.ts.map