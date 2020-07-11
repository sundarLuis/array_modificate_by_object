function filterArrayObjs(array, keyParamIterator, valueParam) {
    /*
        array -> que deseo filtrar
        keyParamIterator -> con el que quiero filtrar
        valueParam -> el valor especifico para encontrarlo
    */
    return array.map(function(item) {
        return item[keyParamIterator]
        // -1 si no lo encuentra retornara
        // si tiene exito te devuelve el index correcto
    }).indexOf(valueParam);
}
module.exports = filterArrayObjs