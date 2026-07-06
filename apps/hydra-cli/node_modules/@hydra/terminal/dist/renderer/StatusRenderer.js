export class StatusRenderer {
    render(status) {
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
//# sourceMappingURL=StatusRenderer.js.map