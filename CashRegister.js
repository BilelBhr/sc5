function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let change = [];
    const currency = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    for (let i = cid.length - 1; i >= 0; i--) {
      let currencyName = cid[i][0];
      let currencyValue = currency[currencyName];
      let currencyAmount = cid[i][1];
  
      let currencyCount = Math.floor(changeDue / currencyValue);
  
      if (currencyCount > 0 && currencyCount <= currencyAmount / currencyValue) {
        let changeCurrency = [currencyName, currencyCount * currencyValue];
        change.push(changeCurrency);
        changeDue -= currencyCount * currencyValue;
        changeDue = Math.round(changeDue * 100) / 100;
      } else if (currencyCount > 0 && currencyCount > currencyAmount / currencyValue) {
        let changeCurrency = [currencyName, currencyAmount];
        change.push(changeCurrency);
        changeDue -= currencyAmount;
        changeDue = Math.round(changeDue * 100) / 100;
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }
  
  