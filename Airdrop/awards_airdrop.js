/**
 * Created by zhaoyiyu on 2018/2/7.
 */

const readLastLines = require('read-last-lines');
const Config = require('./config/config.js');
const airdropList = require('./airdrop_list/airdropList.js');
const airdrop = require('./function/airdrop');
const sleep = require('sleep');
const number = Config.transaction.number
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(Config.transaction.url));

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
                //airdrop.transferTool(addresses.slice(start,end),amounts.slice(start,end))
            //}catch(error){
                //console.log(error);
                //console.log(addresses.slice(start,end)  +  amounts.slice(start,end))
              //  await sleep(120000);
            //}
            await sleep(5000);
                readLastLines.read('./hash.txt', 1)
                .then((lines) => {
                    var receipt = web3.eth.getTransactionReceipt(lines.substr(0,66)).then((res) => {
                    // var logs = JSON.stringify(res);
                        while(true){
                            if(res["status"] == '0x1'){
                                break;
                            }else{
                            sleep(60000);
                            }
                        }
                    });
                        ;
                });
            

            await sleep(120000);
        }
    };
    
    go();
});


