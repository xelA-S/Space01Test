
const sortData = (data, sortOrder) => {
    if (data !== []) {
        if (sortOrder == "ascending") {
            return data.sort((a, b) => a.price - b.price).slice(0, 5)
        }
        if (sortOrder == "descending") {
            return data.sort((a, b) => b.price - a.price).slice(0, 5)
        }
    }
    return data

}

let items = [
    { name: 'Item A', price: -125 },
    { name: 'Item B', price: -230 },
    { name: 'Item C', price: -295 },
    { name: 'Item D', price: -245 },
    { name: 'Item E', price: -900 },
    { name: 'Item F', price: -875 },
    { name: 'Item G', price: -235 },
    { name: 'Item H', price: -400 },
]
//console.log("this is the result", sortData(items, "ascending"))


describe('Testing sorts on various price values', () => {

    test("sorting negative values", () => {
        console.log("this is the result", sortData(items, "descending"))

        expect(sortData(items, "ascending")).toBeInstanceOf(Array);
        expect(sortData(items, "ascending")).toEqual([
            { name: 'Item E', price: -900 },
            { name: 'Item F', price: -875 },
            { name: 'Item H', price: -400 },
            { name: 'Item C', price: -295 },
            { name: 'Item D', price: -245 },
        ])
        expect(sortData(items, "descending")).toEqual([
            { name: 'Item A', price: -125 },
            { name: 'Item B', price: -230 },
            { name: 'Item G', price: -235 },
            { name: 'Item D', price: -245 },
            { name: 'Item C', price: -295 },
        ])



    })
    test("sorting repeat values", () => {
        console.log("this is the result", sortData(items, "ascending"))
        items[0].price = items[1].price;
        items[2].price = items[3].price;

        expect(sortData(items, "ascending")).toBeInstanceOf(Array);
        expect(sortData(items, "ascending")).toEqual([
            { name: 'Item E', price: -875 },
            { name: 'Item F', price: -875 },
            { name: 'Item H', price: -295 },
            { name: 'Item C', price: -295 },
            { name: 'Item D', price: -245 },
        ])
        expect(sortData(items, "descending")).toEqual([
            { name: 'Item A', price: -125 },
            { name: 'Item B', price: -230 },
            { name: 'Item G', price: -235 },
            { name: 'Item D', price: -245 },
            { name: 'Item H', price: -295 },
        ])



    })
    test("sorting zero values", () => {
       

    })


});
