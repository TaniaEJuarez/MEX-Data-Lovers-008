require('../src/data.js');

const mock = [{
        name: "Aatrox",
        tags: ["Fighter", "Tank"],
        stats: {
            movespeed: 345,
            armor: 24.384,
            attackdamage: 60.376,
            attackspeedoffset: -0.04,
        }
    },
    {
        name: "Ahri",
        tags: ["Mage", "Assassin"],
        stats: {
            movespeed: 330,
            armor: 20.88,
            attackdamage: 53.04,
            attackspeedoffset: -0.065,
        }
    },

];
const mock2 = [{
        name: "Ahri",
        tags: ["Mage", "Assassin"],
        stats: {
            movespeed: 330,
            armor: 20.88,
            attackdamage: 69.04,
            attackspeedoffset: -0.065,
        }
    },
    {
        name: "Aatrox",
        tags: ["Fighter", "Tank"],
        stats: {
            movespeed: 345,
            armor: 24.384,
            attackdamage: 60.376,
            attackspeedoffset: -0.04,
        }
    }
];
//Agregar a package json linea 9 "pretest": "npm run eslint --silent && npm run htmlhint --silent",
describe('filterByRole', () => {
    it('is a function', () => {
        expect(typeof dataManager.filterByRole).toBe('function');
    });

    it('returns "Array"', () => {
        expect(dataManager.filterByRole(mock, "Tank")).toEqual([{
            name: "Aatrox",
            tags: ["Fighter", "Tank"],
            stats: {
                movespeed: 345,
                armor: 24.384,
                attackdamage: 60.376,
                attackspeedoffset: -0.04,
            }
        }]);
    });
    it('returns "Array"', () => {
        expect(dataManager.filterByRole(mock, "Mage")).toEqual([{
            name: "Ahri",
            tags: ["Mage", "Assassin"],
            stats: {
                movespeed: 330,
                armor: 20.88,
                attackdamage: 53.04,
                attackspeedoffset: -0.065,
            }
        }]);
    });
});

describe('filterByAbility', () => {
    it('is function', () => {
        expect(dataManager.filterByAbility(mock, "armor")).toEqual(mock);
    });
    it('is function', () => {
        expect(dataManager.filterByAbility(mock2, "attackdamage")).toEqual(mock2);
    });
});


// Matchers de jest