module.exports = function makeExchange(currency) {
    const money = {H: 50, Q:25, D: 10, N: 5, P: 1};
    let countMoney = {};

    (currency >= 0 && currency < 10000) ? count(currency) :
    (currency < 0) ? countMoney = {} :
    countMoney = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    	
    function count() {
    	let balance = currency;
    	for(key in money){
    		countMoney[key] = Math.floor(balance / money[key]);
    		balance = balance - countMoney[key] * money[key];
    		if(countMoney[key] == 0) {
    			delete countMoney[key];
    		}    		
    	}   	
    	return countMoney;
    }

    
    return countMoney;
}

