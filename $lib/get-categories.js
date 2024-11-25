import { toolGroups } from './data/tools.json'

export function getCategories() {
    // Convertimos el objeto toolGroups en un array de categorías
    return Object.entries(toolGroups).map(([key, group]) => ({
        slug: key,
        title: group.title,
        tools: group.tools,
        // Mantén cualquier otra propiedad que necesites
        isPrivate: false // o la lógica que determines para isPrivate
    }));
} 