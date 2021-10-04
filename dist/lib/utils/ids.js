"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEM = exports.METAPLEX_ID = exports.AUCTION_ID = exports.VAULT_ID = exports.METADATA_PROGRAM_ID = exports.MEMO_ID = exports.BPF_UPGRADE_LOADER_ID = exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = exports.TOKEN_PROGRAM_ID = exports.WRAPPED_SOL_MINT = exports.pubkeyToString = exports.toPublicKey = exports.LazyAccountInfoProxy = void 0;
const web3_js_1 = require("@solana/web3.js");
class LazyAccountInfoProxy {
    constructor() {
        this.executable = false;
        this.owner = '';
        this.lamports = 0;
    }
    get data() {
        //
        return undefined;
    }
}
exports.LazyAccountInfoProxy = LazyAccountInfoProxy;
const PubKeysInternedMap = new Map();
const toPublicKey = (key) => {
    if (typeof key !== 'string') {
        return key;
    }
    let result = PubKeysInternedMap.get(key);
    if (!result) {
        result = new web3_js_1.PublicKey(key);
        PubKeysInternedMap.set(key, result);
    }
    return result;
};
exports.toPublicKey = toPublicKey;
const pubkeyToString = (key = '') => {
    return typeof key === 'string' ? key : (key === null || key === void 0 ? void 0 : key.toBase58()) || '';
};
exports.pubkeyToString = pubkeyToString;
exports.WRAPPED_SOL_MINT = new web3_js_1.PublicKey('So11111111111111111111111111111111111111112');
exports.TOKEN_PROGRAM_ID = new web3_js_1.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3_js_1.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
exports.BPF_UPGRADE_LOADER_ID = new web3_js_1.PublicKey('BPFLoaderUpgradeab1e11111111111111111111111');
exports.MEMO_ID = new web3_js_1.PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');
exports.METADATA_PROGRAM_ID = 'GaWv8M5ohVLac6EnR6ksMrBfyPyQ4L739GLzg2hgk6Nn';
exports.VAULT_ID = '9VMCGx9GHDJq3UtfFwKzsUbXm8sYibJ4vsk7LrsWBhp';
exports.AUCTION_ID = '3bvQP4jsvqNMPW99at7KLoHynjhVRe5gDaxKXhrM9sJa';
exports.METAPLEX_ID = '5A4Ry7QDxtEkCUXumZiJ2onLMg3K1V2fKquGkBwoCTj5';
exports.SYSTEM = new web3_js_1.PublicKey('11111111111111111111111111111111');
//# sourceMappingURL=ids.js.map