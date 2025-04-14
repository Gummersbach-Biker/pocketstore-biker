export const buildCategoryTree(categories) = () => {
    // Map to store each category by its ID for quick lookup
    const categoryMap = new Map();

    // Initialize the map with all categories
    categories.forEach(category => {
        category.children = []; // Add a children array to each category
        categoryMap.set(category.id, category);
    });

    // Array to hold the root categories (categories with no parent)
    const tree = [];

    // Build the tree structure
    categories.forEach(category => {
        if (category.parent) {
            // If the category has a parent, find the parent and add the category to its children
            const parentCategory = categoryMap.get(category.parent);
            if (parentCategory) {
                parentCategory.children.push(category);
            }
        } else {
            // If no parent, it's a root category
            tree.push(category);
        }
    });

    return tree;
}