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
  public readonly success: boolean;

  /**
   * Output returned by the command.
   */
  public readonly output: string;

  /**
   * Creates a command result.
   */
  public constructor(
    success: boolean,
    output: string,
  ) {
    this.success = success;
    this.output = output;
  }

  /**
   * Creates a successful command result.
   */
  public static success(output: string): CommandResult {
    return new CommandResult(true, output);
  }

  /**
   * Creates a failed command result.
   */
  public static failure(output: string): CommandResult {
    return new CommandResult(false, output);
  }
}