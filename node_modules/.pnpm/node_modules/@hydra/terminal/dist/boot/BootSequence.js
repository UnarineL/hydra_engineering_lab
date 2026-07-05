/**
 * HYDRA I.OS
 * Boot Sequence
 *
 * Defines the ordered startup sequence
 * for the Hydra terminal.
 */
export class BootSequence {
    getSteps() {
        return [
            {
                message: "Initializing Hydra Kernel",
                status: "OK",
            },
            {
                message: "Registering Core Services",
                status: "OK",
            },
            {
                message: "Loading HydraShell",
                status: "OK",
            },
            {
                message: "Restoring Workspace",
                status: "OK",
            },
            {
                message: "Hydra Ready",
                status: "OK",
            },
        ];
    }
}
//# sourceMappingURL=BootSequence.js.map