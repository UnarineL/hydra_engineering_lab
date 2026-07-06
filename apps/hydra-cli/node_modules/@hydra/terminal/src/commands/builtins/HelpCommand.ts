import { Command } from "../contracts/Command.js";
import { CommandResult } from "../models/CommandResult.js";
import { ParsedCommand } from "../parser/ParsedCommand.js";
import { CommandRegistry } from "../registry/CommandRegistry.js";

/**
 * HYDRA I.OS
 * Help Command
 *
 * Displays all registered commands.
 */
export class HelpCommand implements Command {
  public readonly name = "help";

  public readonly description = "Displays available commands.";

  public constructor(
    private readonly registry: CommandRegistry,
  ) {}

  public execute(_: ParsedCommand): CommandResult {
    const output = this.registry
      .getAll()
      .map(command => `${command.name.padEnd(12)}${command.description}`)
      .join("\n");

    return CommandResult.success(output);
  }
}