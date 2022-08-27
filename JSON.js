const user = { id: 1, name: 'Gorib Amir', job: 'actor' };
//console.log(user);
const stringifyJSON = JSON.stringify(user);
//console.log(stringifyJSON);


const shop = {
    owner: 'Alia',
    address: {
        street: 'kochkhet er pase',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

//console.log(shop);
const shopStringify = JSON.stringify(shop);
//console.log(shopStringify);
const hike = JSON.parse(shopStringify);
console.log(hike);