/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let c="",cu=[],r=[];
    for(let i = 0 ; i< searchWord.length ; i++){
        c+=searchWord[i];
        products=products.filter((a)=>a.indexOf(c)==0);
        cu = products.slice(0,3);
        r.push(cu)
    }
    return r;
};
