import React from "react";
import BigNumber from "bignumber.js";


export default class TotalCoin extends React.Component {

    state = {
        loading: true,
        api: null
      };

    async componentDidMount() {

        const url = "https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xCa350BC006f978497b31699097b69F7DD9240698&apikey=BCI1JW7BZW8C8WQM8Q3JFY9ZANCF7PM1U1";
        const response = await fetch(url);
        const data = await response.json();
        const result = data['result'];  //choose data {"status":"1","message":"OK","result":"90000000000000000000000000000"}    
        const number = new BigNumber(result);
    
        const decimals = 18
        const decimalsBN = new BigNumber(decimals)
        const divisor = new BigNumber(10).pow(decimalsBN)
    
        const value = number.div(divisor)
        
        this.setState({ api: value.toFixed(4), loading: false });
        
    }
    
        render () {

            if (this.state.loading) {
              return <div>loading . . .</div>;
            
            }
            return (
              <div>{this.state.api}</div>
            )
          }  

}
