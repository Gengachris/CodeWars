function splitCoins(coins,k){
    groupA = coins.slice(0,k);
    groupB = coins.slice(k);
    groupA.forEach(coin => coin.flip());
    return [groupA, groupB];
}
