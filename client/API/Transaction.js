import sampleTransactions from '../SampleTransaction.js'
const getTransactions= async(TransactionIDs) => {
    // transactionIDs are an array of transaction IDs
    // append userID and username
    return sampleTransactions
    if(TransactionIDs==null){
        return [];
    }
    else{
        return sampleTransactions;
    }
}
export {getTransactions}