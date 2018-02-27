/**
 * Created by zhaoyiyu on 2018/2/3.
 */
require('web3');
require('ethereumjs-tx');
require('solc');
require('ethjs-account');
require('node-xlsx');

//console.log('require librarys');

//以太坊main网络参数
// module.exports = {
//     transaction:{
//         url:'https://mainnet.infura.io',
//         gasPrice:2000000000,
//         gasLimit:6000000
//     },
//     airdropModule: {
//         userPrivateKey:'',                                     //send transaction
//         ercAirDropAmount:'1',       //amount of airdrop
//         airContractAddress:'0x112A5A6678ad276e861872f034040d48275E4c77',
//         tokenContractAddress:'0x5e6b6d9abad9093fdc861ea1600eba1b355cd940',                               //erc20 token contract address
//         transferFromAddress:'0xf5D0318dbb21755B4866CF10bA7f8843F0BD11bf'
//     },
//     approveModule:{
//         userPrivateKey : '',
//         amount : '5000',             //The amount of contract transferable accounts
//         airdropApproveAddress : '0x112A5A6678ad276e861872f034040d48275E4c77',                             //airdrop contract address
//         tokenContractAddress : '0x5e6b6d9abad9093fdc861ea1600eba1b355cd940'
//     },
//     deployModule:{
//         userPrivateKey : ''
//     }
// };

//以太坊Rinkeby网络参数
module.exports = {
    transaction:{
        url:'https://ropsten.infura.io/VsN2lc1BcXrKQPaFXOjn',       //接口
        gasPrice:20000000000, 
        gasLimit:4000000,
        decimals:6,//token decimal
        number:50 //一次调用给多少个账户发币
    },
    airdropModule: {
        userPrivateKey:'',                                     //send transaction
        ercAirDropAmount:'10000000',       //amount of airdrop
        airContractAddress:'0x6abcf2af2dddfbe5f827955e7d6a2d2398617a09',
        tokenContractAddress:'0x7EA71b1B2c3CeE2C18C8C1118f021130069Dc890',                               //erc20 token contract address
        transferFromAddress:'0x677858d0bd71a9300a19e436ae3b5af6d1807cc1'
    },
    approveModule:{
        userPrivateKey : '',
        amount : '5000',             //The amount of contract transferable accounts
        airdropApproveAddress : '0xceCf9E39E17330fF5e802895aaa5Bd02614313Bd',                             //airdrop contract address
        tokenContractAddress : '0xc0eE6Df91C455c64928F1F179C2B84eb61E58870'
    },
    deployModule:{
        userPrivateKey : ''
    }

};
