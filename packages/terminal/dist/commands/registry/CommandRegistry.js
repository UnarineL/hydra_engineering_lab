/**
 * HYDRA I.OS
 * Command Registry
 *
 * Stores and resolves terminal commands.
 */
export class CommandRegistry {
    /**
     * Registered commands.
     */
    commands = new Map();
    /**
     * Registers a command.
     *
     * Throws an error if a command with the
     * same name has already been registered.
     */
    register(command) {
        if (this.commands.has(command.name)) {
            throw new Error(`Command '${command.name}' is already registered.`);
        }
        this.commands.set(command.name, command);
    }
    /**
     * Returns a command by name.
     */
    get(name) {
        return this.commands.get(name);
    }
    /**
     * Determines whether a command exists.
     */
    has(name) {
        return this.commands.has(name);
    }
    /**
     * Returns every registered command.
     */
    getAll() {
        return [...this.commands.values()];
    }
}
//# sourceMappingURL=CommandRegistry.js.map