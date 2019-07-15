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
        });
    },

    averageByADamage: () => {
        let count = 0;
        let sumDamage = 0;
        let averageResult = 0;
        for (let i = 0; i < newData.length; i ++) {
            // Declarar una variable donde guarde el daño de los campiones actuales//
            let currentChampions = newData[i];
            //Declaar una variable que guarde el daño del campion actual//
            let currentAttackdamage = currentChampions.stats.attackdamage;
            // Declarar variable que acumule la suma de cada daño //
            sumDamage = sumDamage + currentAttackdamage; 
            count ++;
        }
        // Fórmula para calcular el promedio //
        averageResult = sumDamage/count;
        console.log('numero de Campeones:'+ count);
        console.log('suma total:' + sumDamage);
        console.log('promedio:'+ averageResult);
        return averageResult;
    }
    
};

    