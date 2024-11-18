export function generateRandomEmail(): string {
    const timestamp = Date.now();
    return `user${timestamp}@example.com`;
}

export function generateRandomProjectName(): string {
    const timestamp = Date.now();
    return `proyecto-${timestamp}`;
}
