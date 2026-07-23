const buildFilterOptions = () => {
    const namesSet = new Set();
    learnPathsData.value.array.forEach((data) => {
        const lp = data.node.learningPath;
        
        lp?.products?.forEach((p) => namesSet.add(p.productName));
        lp?.topics?.forEach((t) => namesSet.add(t.topicName));
    });
    filterOptions.value = Array.from(namesSet).map((name) => ({name, count: 0}))
}