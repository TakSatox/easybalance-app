interface category {
    name: string;
    value: number;
}


const calculateBarsHeight = (categories: category[], maxHeight: number, minHeight: number) => {

    const totalValue = categories.reduce((acc, category) => acc + category.value, 0);
    const maxValue = Math.max(...categories.map(category => category.value));

    // Calculate the bars height
    let bars = categories.map(category => {
        const percentage = (category.value / totalValue) * 100;
        const height = (percentage / 100) * maxHeight;
        const normalizedHeight = (category.value / maxValue) * maxHeight;
        return {
            name: category.name,
            value: category.value,
            percentage: percentage,
            height: height,
            normalizedHeight: normalizedHeight
        };
    });

    // Adjust the bars height 
    const minNormalizedHeight = Math.min(...bars.map(bar => bar.normalizedHeight));
    if (minNormalizedHeight < minHeight) {

        bars = bars.map(bar => {
            if (bar.normalizedHeight < maxHeight) {
                const change = (bar.value / maxValue) * (maxHeight + 100)
                if(bar.normalizedHeight >= minHeight) {
                    if(change > maxHeight) {
                        bar.normalizedHeight = maxHeight - 10
                    } else {
                        bar.normalizedHeight = change
                    }
                }else {
                    bar.normalizedHeight = minHeight + change
                }   
            }

            return bar
        })

        for (let bar of bars) {
            for (let secondBar of bars) {
                if (bar.normalizedHeight > secondBar.normalizedHeight && secondBar.value > bar.value) {
                    bar.normalizedHeight = secondBar.normalizedHeight - 10
                }
            }
        }

    }

    return bars;
}

export { calculateBarsHeight }