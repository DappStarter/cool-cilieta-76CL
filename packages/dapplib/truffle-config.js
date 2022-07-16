require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food custom renew pitch purse gentle light army gather'; 
let testAccounts = [
"0x7ba42d4dca457e319f1f453dd3145a3fa187b884f3dc301680f3f7a2aa4ea9a7",
"0xf151d4f086487b97aaf8c31c170f4609572ec51b5878981d49b5bc0c7fdca095",
"0xa00d107f65fb71eaa857a0ef083f3fc2f76caf925822babb625ae95f274f12b3",
"0x2743d819cdb25a6f32f151bd154092cf8a9a2eac168341fadff44d4ef54f241b",
"0xc6a7fec05df2e697524d24d8ca62c3360a5674388ade4d4b0a4bc6af3a35d12b",
"0x687a8834c6091809a56e99abee6d41c7078a3475a1df82a95141bc907f5dbae8",
"0x8e80c7c25712b6016b2ed59d3df6d79cfa8ef748df875bdd1a0a7410c6dc191e",
"0x82b522a146f828fafe9697540a940c9fc0d6eafd893016a06c4c67653ffa6408",
"0x8f7cbe77070b9a640dedc94d127f1be1b32cd792f05066565c55e76aa3cddf32",
"0xcfc7b4ca654d3b51b7f1aa2fb02b9694423b77cb10a73227e17a155a550728e5"
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
            version: '^0.8.0'
        }
    }
};

