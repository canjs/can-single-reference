/*can-single-reference@1.2.1#can-single-reference*/
'use strict';
var CID = require('can-cid');
var singleReference;
function getKeyName(obj, key, extraKey) {
    var keyName = extraKey ? CID(obj, key) + ':' + extraKey : CID(obj, key);
    return keyName || key;
}
singleReference = {
    set: function (obj, key, value, extraKey) {
        obj[getKeyName(obj, key, extraKey)] = value;
    },
    getAndDelete: function (obj, key, extraKey) {
        var keyName = getKeyName(obj, key, extraKey);
        var value = obj[keyName];
        delete obj[keyName];
        delete obj._cid;
        return value;
    }
};
module.exports = singleReference;