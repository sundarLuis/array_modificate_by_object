const _ = require('lodash')
let data = [
    {
        "id":1,
        "name":"joan"
    },
    {
        "id":2,
        "name":"senix"
    },
    {
        "id":3,
        "name":"daniel"
    },
]
let copyArrayObjcts = _.cloneDeep(data);
let copyArrayObjcts2 = data;
let add = {
    temp : "xD"
}
data[0] = {...data[0],...add}

console.log(data)
console.log(copyArrayObjcts)
console.log(copyArrayObjcts2)