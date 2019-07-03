// Agregamos la función a nuestro objeto global window
window.dataManager = {
    filterByRole: (newData, selectRolesValue) => {
        let filterRole = newData.filter(index => {
            return index.tags.find((tag) => tag === selectRolesValue);
        });
        return filterRole;
    
    }

//     filterByAbility: (newData, ability) => {
//         let filterAbility = newData.filter(index => {
//             console.log (Object.values(index.data));
//             return index.stats(stat => stat === ability);
            
//         });
//         return filterAbility;
//     }
  };