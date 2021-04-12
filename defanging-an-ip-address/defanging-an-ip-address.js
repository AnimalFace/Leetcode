/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let splitIP = address.split('.');
    return splitIP.join('[.]')
};