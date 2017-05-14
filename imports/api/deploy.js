import Web3 from 'web3';

var deployContract = function(data,callback){
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];
var royality_royalityContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"licensor_comp","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startDate","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"paye","type":"string"},{"name":"percentag","type":"uint256"},{"name":"effectiveDat","type":"string"}],"name":"setRightIn_first","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"effectiveDate","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"payoutCurren","type":"string"},{"name":"paymentDeliv","type":"string"}],"name":"setRightIn_second","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRightIn_first","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paymentDelivery","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"payoutCurrency","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"payee","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"product","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"licensee_comp","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getRightIn_second","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endDate","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"percentage","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currency","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"date_of_Creation","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}]);



var royality_royality = royality_royalityContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000c57fe5b5b6114d98061001c6000396000f300606060405236156100e4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063078ff260146100e65780630b97bc861461017f57806317a6b2c21461021857806355feec07146102be578063779ef6181461035757806385471d87146103f457806395402d6a1461050e5780639c5b4e48146105a7578063ae90b21314610640578063bf9ce952146106d9578063bfb6dc2d14610772578063c184a1891461080b578063c24a0f8b1461091e578063c78ad77f146109b7578063e5a6b10f146109dd578063f9b0ad3314610a03575bfe5b34156100ee57fe5b6100f6610a9c565b6040518080602001828103825283818151815260200191508051906020019080838360008314610145575b80518252602083111561014557602082019150602081019050602083039250610121565b505050905090810190601f1680156101715780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018757fe5b61018f610b3a565b60405180806020018281038252838181518152602001915080519060200190808383600083146101de575b8051825260208311156101de576020820191506020810190506020830392506101ba565b505050905090810190601f16801561020a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561022057fe5b6102bc600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610bd8565b005b34156102c657fe5b6102ce610c13565b604051808060200182810382528381815181526020019150805190602001908083836000831461031d575b80518252602083111561031d576020820191506020810190506020830392506102f9565b505050905090810190601f1680156103495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561035f57fe5b6103f2600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610cb1565b005b34156103fc57fe5b610404610ce4565b60405180806020018481526020018060200183810383528681815181526020019150805190602001908083836000831461045d575b80518252602083111561045d57602082019150602081019050602083039250610439565b505050905090810190601f1680156104895780820380516001836020036101000a031916815260200191505b508381038252848181518152602001915080519060200190808383600083146104d1575b8051825260208311156104d1576020820191506020810190506020830392506104ad565b505050905090810190601f1680156104fd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b341561051657fe5b61051e610e41565b604051808060200182810382528381815181526020019150805190602001908083836000831461056d575b80518252602083111561056d57602082019150602081019050602083039250610549565b505050905090810190601f1680156105995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105af57fe5b6105b7610edf565b6040518080602001828103825283818151815260200191508051906020019080838360008314610606575b805182526020831115610606576020820191506020810190506020830392506105e2565b505050905090810190601f1680156106325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561064857fe5b610650610f7d565b604051808060200182810382528381815181526020019150805190602001908083836000831461069f575b80518252602083111561069f5760208201915060208101905060208303925061067b565b505050905090810190601f1680156106cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156106e157fe5b6106e961101b565b6040518080602001828103825283818151815260200191508051906020019080838360008314610738575b80518252602083111561073857602082019150602081019050602083039250610714565b505050905090810190601f1680156107645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561077a57fe5b6107826110b9565b60405180806020018281038252838181518152602001915080519060200190808383600083146107d1575b8051825260208311156107d1576020820191506020810190506020830392506107ad565b505050905090810190601f1680156107fd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561081357fe5b61081b611157565b60405180806020018060200183810383528581815181526020019150805190602001908083836000831461086e575b80518252602083111561086e5760208201915060208101905060208303925061084a565b505050905090810190601f16801561089a5780820380516001836020036101000a031916815260200191505b508381038252848181518152602001915080519060200190808383600083146108e2575b8051825260208311156108e2576020820191506020810190506020830392506108be565b505050905090810190601f16801561090e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561092657fe5b61092e6112ac565b604051808060200182810382528381815181526020019150805190602001908083836000831461097d575b80518252602083111561097d57602082019150602081019050602083039250610959565b505050905090810190601f1680156109a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156109bf57fe5b6109c761134a565b6040518082815260200191505060405180910390f35b34156109e557fe5b6109ed611350565b6040518082815260200191505060405180910390f35b3415610a0b57fe5b610a13611356565b6040518080602001828103825283818151815260200191508051906020019080838360008314610a62575b805182526020831115610a6257602082019150602081019050602083039250610a3e565b505050905090810190601f168015610a8e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b325780601f10610b0757610100808354040283529160200191610b32565b820191906000526020600020905b815481529060010190602001808311610b1557829003601f168201915b505050505081565b600a8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bd05780601f10610ba557610100808354040283529160200191610bd0565b820191906000526020600020905b815481529060010190602001808311610bb357829003601f168201915b505050505081565b8260009080519060200190610bee9291906113f4565b50816001819055508060029080519060200190610c0c9291906113f4565b505b505050565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ca95780601f10610c7e57610100808354040283529160200191610ca9565b820191906000526020600020905b815481529060010190602001808311610c8c57829003601f168201915b505050505081565b8160039080519060200190610cc79291906113f4565b508060049080519060200190610cde9291906113f4565b505b5050565b610cec611474565b6000610cf6611474565b60006001546002828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d925780601f10610d6757610100808354040283529160200191610d92565b820191906000526020600020905b815481529060010190602001808311610d7557829003601f168201915b50505050509250808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e2e5780601f10610e0357610100808354040283529160200191610e2e565b820191906000526020600020905b815481529060010190602001808311610e1157829003601f168201915b505050505090509250925092505b909192565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b505050505081565b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f755780601f10610f4a57610100808354040283529160200191610f75565b820191906000526020600020905b815481529060010190602001808311610f5857829003601f168201915b505050505081565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110135780601f10610fe857610100808354040283529160200191611013565b820191906000526020600020905b815481529060010190602001808311610ff657829003601f168201915b505050505081565b60078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110b15780601f10611086576101008083540402835291602001916110b1565b820191906000526020600020905b81548152906001019060200180831161109457829003601f168201915b505050505081565b60068054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561114f5780601f106111245761010080835404028352916020019161114f565b820191906000526020600020905b81548152906001019060200180831161113257829003601f168201915b505050505081565b61115f611474565b611167611474565b60036004818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112005780601f106111d557610100808354040283529160200191611200565b820191906000526020600020905b8154815290600101906020018083116111e357829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561129c5780601f106112715761010080835404028352916020019161129c565b820191906000526020600020905b81548152906001019060200180831161127f57829003601f168201915b50505050509050915091505b9091565b600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113425780601f1061131757610100808354040283529160200191611342565b820191906000526020600020905b81548152906001019060200180831161132557829003601f168201915b505050505081565b60015481565b60095481565b60088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113ec5780601f106113c1576101008083540402835291602001916113ec565b820191906000526020600020905b8154815290600101906020018083116113cf57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061143557805160ff1916838001178555611463565b82800160010185558215611463579182015b82811115611462578251825591602001919060010190611447565b5b5090506114709190611488565b5090565b602060405190810160405280600081525090565b6114aa91905b808211156114a657600081600090555060010161148e565b5090565b905600a165627a7a72305820302d834d4df3516033b9422105391557d63eac423b5ab2d3ac36e20231a01f380029', 
     gas: '4700000'
   }, function (e, contract){
    // console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
         localStorage.setItem('address',contract.address);
         localStorage.setItem('tx',contract.transactionHash);
         callback(contract.address);
    }
 })
}

export { deployContract }; 
