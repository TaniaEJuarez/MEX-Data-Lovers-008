// Agregamos la función a nuestro objeto global window
window.dataManager = {
    filterByRole: (newData, selectRolesValue) => {
        let filterRole = newData.filter(index => {
            return index.tags.find((tag) => tag === selectRolesValue);
        });
        return filterRole;
    
    },

    filterByAbility: (newData, ability) => {
        return newData.sort((a,b) => {
            if (a.stats[ability] < b.stats[ability]) {
                return -1;
            }
            if (a.stats[ability] > b.stats[ability]){
                return 1;
            }
            return 0;
            
        })
        
    },
   
    orderByAlphabetic: (newData, order) => {
        return newData.sort((a,b) => {
            if (a.name[order] < b.name[order]) {
                return 1;
            }
            if (a.name[order] > b.name[order]) {
                return -1;
            }
            return 0;

        })
        

    }
    
};  
//     filterByAbility: (newData, ability) => {
//         let filterAbility = newData.filter(index => {
//             console.log (Object.values(index.data));
//             return index.stats(stat => stat === ability);
            
//         });
//         return filterAbility;
//     }
  