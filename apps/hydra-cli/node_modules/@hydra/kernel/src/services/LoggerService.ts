/**
 * HYDRA I.OS
 * Kernel Logger Service
 *
 * Provides a centralized logging interface for
 * all Hydra components.
 */
export class LoggerService {
  /**
   * Logs informational messages.
   */
  public info(message: string): void {
    console.log(`[INFO] ${message}`);
  }

  /**
   * Logs successful operations.
   */
  public success(message: string): void {
    console.log(`[SUCCESS] ${message}`);
  }

  /**
   * Logs warning messages.
   */
  public warn(message: string): void {
    console.warn(`[WARNING] ${message}`);
  }

  /**
   * Logs error messages.
   */
  public error(message: string): void {
    console.error(`[ERROR] ${message}`);
  }

  /**
   * Logs debugging information.
   */
  public debug(message: string): void {
    console.debug(`[DEBUG] ${message}`);
  }
}