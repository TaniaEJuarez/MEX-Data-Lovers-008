// Agregamos las funciones puras a nuestro objeto global window
window.dataManager = {
    filterByRole: (newData, selectRolesValue) => {
        let filterRole = newData.filter(index => {
            return index.tags.find((tag) => tag === selectRolesValue);
        });
        return filterRole;

    },

    filterByAbility: (newData, ability) => {
        return newData.sort((a, b) => {
            if (a.stats[ability] < b.stats[ability]) {
                return -1;
            }
            if (a.stats[ability] > b.stats[ability]) {
                return 1;
            }
            return 0;
        })
    }
};