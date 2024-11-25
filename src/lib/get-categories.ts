import { toolGroups } from './data/tools.json';

export function getCategories() {
    return Object.entries(toolGroups).map(([slug, group]) => ({
        slug,
        title: group.title,
        description: group.description,
        tools: group.tools
    }));
} 