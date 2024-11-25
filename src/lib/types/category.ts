import type { Tool } from './tool';

export interface Category {
    slug: string;
    title: string;
    tools: Tool[];
} 