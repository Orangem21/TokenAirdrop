/**
 * Created by zhaoyiyu on 2018/2/7.
 */
const Config = require('./config/config.js');
const airdropList = require('./airdrop_list/airdropList.js');
const airdrop = require('./function/airdrop');
const number = Config.transaction.number

airdropList.awardsAirdrop(function (addresses,amounts) {
    
    var sleep = function (time) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, time);
        })
    };
    
    var go = async function () {
        var len = Math.ceil(addresses.length/number)
    
        var start=0
        for( i = 0; i <len ; i++) {
            start=i*number
            end=start + number -1
            //try{
                airdrop.transferTool(addresses.slice(start,end),amounts.slice(start,end))
            //}catch(error){
                //console.log(error);
                //console.log(addresses.slice(start,end)  +  amounts.slice(start,end))
              //  await sleep(120000);
            //}
            await sleep(120000);
        }
    };
    
    go();
});

