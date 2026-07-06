import type { TerminalStatus } from "../models/TerminalStatus.js";

export class StatusRenderer {
    public render(status: TerminalStatus): string {
        return `
HYDRA STATUS
──────────────────────────────────────────────────────────

[KERNEL]   ● ${status.kernel}
[ENGINE]   ● ${status.engine}
[MODE]     ● ${status.mode}
[PROJECT]  ● ${status.project}
[GIT]      ● ${status.git}
[SESSION]  ● ${status.session}

──────────────────────────────────────────────────────────
`;
    }
}