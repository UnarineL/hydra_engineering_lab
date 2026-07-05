/**
 * HYDRA I.OS
 * Terminal
 *
 * Coordinates the Hydra terminal by:
 *  - Rendering the startup interface
 *  - Registering built-in commands
 *  - Receiving user input
 *  - Executing commands
 */
export declare class Terminal {
    private readonly renderer;
    private readonly registry;
    private readonly parser;
    private readonly executor;
    /**
     * Starts the terminal.
     */
    start(): void;
    /**
     * Registers every built-in command.
     */
    private registerCommands;
    /**
     * Starts the interactive terminal loop.
     */
    private startInputLoop;
}
//# sourceMappingURL=Terminal.d.ts.map