/**
 * HYDRA I.OS
 * Parsed Command
 *
 * Represents a command after it has been
 * parsed from user input.
 */
export class ParsedCommand {
    /**
     * Original user input.
     */
    raw;
    /**
     * Command name.
     */
    command;
    /**
     * Command arguments.
     */
    arguments;
    /**
     * Creates a parsed command.
     */
    constructor(raw, command, arguments_) {
        this.raw = raw;
        this.command = command;
        this.arguments = arguments_;
    }
}
//# sourceMappingURL=ParsedCommand.js.map