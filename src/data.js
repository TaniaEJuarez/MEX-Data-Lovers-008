// Agregamos la función a nuestro objeto global window
window.dataManager = {
    filterByRole: (newData, selectRolesValue) => {
        let filterRole = newData.filter(index => {
            return index.tags.find((tag) => tag === selectRolesValue);
        });
        return filterRole;
    },

    filterByAbility: (newData, ability) => {
        let filterAbility = newData.filter(index => {
            return index.stats.filter(stat => stat === ability);
        });
        return filterAbility;
    }
};