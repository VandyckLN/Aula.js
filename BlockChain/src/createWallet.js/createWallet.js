//importando as bibliotecas
const bitcoin = require('bitcoinjs-lib')
const bip39 = require('bip39')
const ecc = require('tiny-secp256k1')
// Correção na importação do bip32
const { BIP32Factory } = require('bip32')
const bip32 = BIP32Factory(ecc);

//definindo a rede
// bitcoin - rede principal - mainnet
// bitcoin - rede de teste - testnet
const network = bitcoin.networks.testnet

//gerando a seed
const path = `m/49'/1'/0'/0/0`

//criando o mnemonic para a seed
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteira
const root = bip32.fromSeed(seed, network)

//criando uma conta - par pvt-pub keys
const account = root.derivePath(path)
let node = account.derive(0).derive(0)

//criando o endereço
let btcAddress = bitcoin.payments.p2wpkh({
    pubkey: account.publicKey,
    network: network
}).address;

console.log('Carteira criada com sucesso')
console.log('Endereço: ', btcAddress)
console.log('Chave privada: ', node.toWIF())
console.log('Seed: ', mnemonic)
