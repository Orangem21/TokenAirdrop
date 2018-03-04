/**
 * Created by zhaoyiyu on 2018/2/5.
 */

const totalAirdropListPath = './airdrop_list/ecot2.xlsx';
const awardsAirdropListPath = './airdrop_list/ecot2.xlsx';
const errorAirdropListPath = './airdrop_list/ecot2.xlsx';

//address 在excel中的序号
const addressIndex = 0;

function readFile(path){

    var xlsx = require('node-xlsx');
    var fs = require('fs');

    //parse
    var obj = xlsx.parse(path);
    var excelObj=obj[0].data;
    //console.log(excelObj);

    var data = [];
    for(var i in excelObj){
        var arr=[];
        var value=excelObj[i];
        for(var j in value){
            arr.push(value[j]);
        }
        data.push(arr);
    }

    return data;
}

var parseAwardsAirdropList = function (result){

    var data = readFile(awardsAirdropListPath);

    var addresses = [];
    var amounts = [];

    //start index
    var destinationStartIndex = 0;

    for (var i in data){
        var arr = data[i];

        addresses.push(arr[0]);
        amounts.push(arr[1]);
    }

    result(addresses,amounts);
};


var awardsAirdrop = function (result) {

    parseAwardsAirdropList(result);
};



module.exports = {
    //normalAirdrop:normalAirdrop,
    awardsAirdrop:awardsAirdrop
    //getErrorList:getErrorAddressList

};
