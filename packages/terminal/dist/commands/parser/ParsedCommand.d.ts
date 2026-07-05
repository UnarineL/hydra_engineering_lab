/**
 * HYDRA I.OS
 * Parsed Command
 *
 * Represents a command after it has been
 * parsed from user input.
 */
export declare class ParsedCommand {
    /**
     * Original user input.
     */
    readonly raw: string;
    /**
     * Command name.
     */
    readonly command: string;
    /**
     * Command arguments.
     */
    readonly arguments: readonly string[];
    /**
     * Creates a parsed command.
     */
    constructor(raw: string, command: string, arguments_: readonly string[]);
}
//# sourceMappingURL=ParsedCommand.d.ts.map