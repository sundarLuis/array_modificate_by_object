const funcHelper = require('./helper/func')
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
const search = funcHelper(data,"id",2)
if(search !== -1){
    let indexFound = search
    let add = {
        temp : "tem",
        temp2 : 0,
        temp3 : true,
    }
    data[indexFound] = {...data[indexFound],...add}
    console.log(data)
}
