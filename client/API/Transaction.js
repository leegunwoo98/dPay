
export const getTransactions= async(TransactionIDs) => {
    // transactionIDs are an array of transaction IDs
    if(TransactionIDs==null){
        return [];
    }
    else{
        return sampleTransactions;
    }
}