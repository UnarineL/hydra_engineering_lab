import * as readline from "node:readline";
import { stdin, stdout } from "node:process";
import { TerminalRenderer } from "./renderer/TerminalRenderer.js";
import { CommandParser } from "./commands/parser/CommandParser.js";
import { CommandRegistry } from "./commands/registry/CommandRegistry.js";
import { CommandExecutor } from "./commands/executor/CommandExecutor.js";
import { HelpCommand } from "./commands/builtins/HelpCommand.js";
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
export class Terminal {
    renderer = new TerminalRenderer();
    registry = new CommandRegistry();
    parser = new CommandParser();
    executor = new CommandExecutor(this.registry);
    /**
     * Starts the terminal.
     */
    start() {
        this.registerCommands();
        this.renderer.render({
            kernel: "READY",
            engine: "CORE",
            mode: "DISCUSS",
            project: "hydra_engineering_lab",
            git: "CLEAN",
            session: "Founder",
        });
        this.startInputLoop();
    }
    /**
     * Registers every built-in command.
     */
    registerCommands() {
        this.registry.register(new HelpCommand(this.registry));
    }
    /**
     * Starts the interactive terminal loop.
     */
    startInputLoop() {
        const terminal = readline.createInterface({
            input: stdin,
            output: stdout,
            prompt: "Founder::Hydra > ",
        });
        terminal.prompt();
        terminal.on("line", (input) => {
            const parsed = this.parser.parse(input);
            const result = this.executor.execute(parsed);
            if (result.success && result.output.length > 0) {
                console.log(result.output);
            }
            if (!result.success) {
                console.error(result.output);
            }
            terminal.prompt();
        });
        terminal.on("close", () => {
            console.log("\nHydra session ended.");
        });
    }
}
//# sourceMappingURL=Terminal.js.map