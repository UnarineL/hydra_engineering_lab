import { Command } from "../contracts/Command.js";
/**
 * HYDRA I.OS
 * Command Registry
 *
 * Stores and resolves terminal commands.
 */
export declare class CommandRegistry {
    /**
     * Registered commands.
     */
    private readonly commands;
    /**
     * Registers a command.
     *
     * Throws an error if a command with the
     * same name has already been registered.
     */
    register(command: Command): void;
    /**
     * Returns a command by name.
     */
    get(name: string): Command | undefined;
    /**
     * Determines whether a command exists.
     */
    has(name: string): boolean;
    /**
     * Returns every registered command.
     */
    getAll(): readonly Command[];
}
//# sourceMappingURL=CommandRegistry.d.ts.map