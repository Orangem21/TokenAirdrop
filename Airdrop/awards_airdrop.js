/**
 * Created by zhaoyiyu on 2018/2/7.
 */

const airdropList = require('./airdrop_list/airdropList.js');
const airdrop = require('./function/airdrop');

airdropList.awardsAirdrop(function (addresses,amounts) {
    
    var sleep = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, time);
        })
    };
    
    var go = async function () {
        var len = Math.ceil(addresses.length/30)
    
        var start=0
        for( i = 0; i <len ; i++) {
            start=i*50
            end=start + 49
            try{
                airdrop.transferTool(addresses.slice(start,end),amounts.slice(start,end))
            }catch(error){
                console.log(error);
                console.log(addresses.slice(start,end)  +  amounts.slice(start,end))
                await sleep(120000);
            }
            await sleep(120000);
        }
    };
    
    go();
});

