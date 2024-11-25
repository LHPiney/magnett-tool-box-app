import type { Tool } from '$lib/types/tool';
import toolsData from '$lib/data/tools.json';

export async function getTools(): Promise<Tool[]> {
    // Simula una llamada API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(toolsData.tools);
        }, 100);
    });
}

// Para futuras implementaciones con API real
// export async function getTools(): Promise<Tool[]> {
//     const response = await fetch('/api/tools');
//     return response.json();
// } 