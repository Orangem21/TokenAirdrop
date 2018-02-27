
/**
 * Created by zhaoyiyu on 2018/2/7.
 */

const airdropList = require('./airdrop_list/airdropList.js');
const airdrop = require('./function/airdrop');
const Config = require('./config/config.js');
const _ = require('lodash');

airdropList.normalAirdrop(function (addresses) {

    if (addresses.length == 0){
        return;
    }

    //amount of airdrop
    const ercAirDropAmount = Config.airdropModule.ercAirDropAmount;

    var amounts = [];
    for (var i = 0 ; i < addresses.length ; i ++){
        amounts.push(ercAirDropAmount);
    }
    console.log(' ------loading list ------ ');

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
        start=i*30
        end=start  + 29
        airdrop.transferTool(addresses.slice(start,end),amounts.slice(start,end));
        await sleep(60000);
    }
};

go();
});






