require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name raise night puppy hunt beach swing gentle'; 
let testAccounts = [
"0xaba74f74d8836d19a3c9cf925f1367f94c6872eddf0f5e647f79c495a83cb47a",
"0x8ae40f93ebde85e0e2e3ccaf48ac54a7a9dd514fd9f0db4961ab376e03297f79",
"0x28cca09842a4e3e9e075b5b810b9281bd22c2fdaa6b97190885b33784fcd905d",
"0xc55614414c900238d6e5e43d1553152665533ce5f48f07644e1ade2ea3382804",
"0x4fa91560ee05bdc50dd13e4e2e9e4072f72188f4ba77d4a805bc5240a027dffa",
"0xb25f7cdc63e3e9763281b4019f7b18985c02ebdcb364490d720e10ce2783e112",
"0x62980b365efbf93d7f0ebd8bebcd565e151c94218ddb0dc41417e678cec6dcc3",
"0x475aea846ef1bff0ad45db8ce9589d26bb6633c8950ba7550a3b18a06a5df2da",
"0x21a6219207dad001377dbd1da211c240974246d932eac382a6f8ef029c1248c6",
"0xe67fe3bc838e58d4c2b82dbb19832c56e423cdf68b99a6a2808a25c36a9eab12"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
