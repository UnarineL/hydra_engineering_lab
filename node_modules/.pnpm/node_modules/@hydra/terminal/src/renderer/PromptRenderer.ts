export class PromptRenderer {
    public render(user: string): string {
        return `${user}::Hydra > `;
    }
}