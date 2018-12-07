$(document).ready(function() {
  const config = { prod: true }

  if (config.prod) {
    config.infura = 'mainnet'
    config.etherscan = 'https://api.etherscan.io/api?module=',
    config.hash = 'https://etherscan.io/tx/'
    config.address = 'https://etherscan.io/address/'
  } else {
    config.infura = 'kovan'
    config.etherscan = 'https://api-kovan.etherscan.io/api?module='
    config.hash = 'https://kovan.etherscan.io/tx/'
    config.address = 'https://kovan.etherscan.io/address/'
  }

  window.web3 = new Web3(new Web3.providers.HttpProvider('https://' + config.infura + '.infura.io/'))

  const blockInfo = '&fromBlock=379224&toBlock=latest'
  const balanceInfo = 'account&action=balance&tag=latest&'
  const contractAddress = '0x3f11c993d3CeD0790630bEEe1bB543FdE165F614'

  const totalInvestorsEvent = '0x387d39bfed02fad21f9108b51f3ba7fc3880f84960908214bb7d9460e73116d5'
  const lastDepositEvent = '0xe31c7b8d08ee7db0afa68782e1028ef92305caeea8626633ad44d413e30f6b2f'

  const apiKey = '&apikey=YourApiKeyToken'

  const contractBalance = config.etherscan + balanceInfo + 'address=' + contractAddress + apiKey
  $.get( contractBalance, function (data) {
    if (!data || !data.status === '1') {
      console.log('check Etherscan api')
      return
    }

    const balance = Math.round(web3.utils.fromWei(data.result, 'ether') * 100) / 100
    $('.balanceeth').html( balance )
    $('.balancedollar').html( balance * 89 )
  })


  const totalInvestors = config.etherscan + 'logs&action=getLogs' + blockInfo + '&address=' + contractAddress + '&topic0=' + totalInvestorsEvent + apiKey
  $.get( totalInvestors, function (data) {
    if (!data || !data.status === '1') {
      console.log('check Etherscan api')
      return
    }

    const investors = data.result.length
    $('.investors').html( investors )
  })

  function getUserInfo(address) {
    const lastDeposit = config.etherscan + 'logs&action=getLogs' + blockInfo + '&address=' + contractAddress + '&topic0=' + lastDepositEvent + '&topic1=' + address + apiKey
    $.get( lastDeposit, function (data) {
      if (!data || !data.status === '1') {
        console.log('check Etherscan api')
        return
      }  
      const deposits = data.result.reverse()
      const timestamp = web3.utils.hexToNumber(deposits[0].timeStamp)

      const date = new Date(timestamp * 1000)
      const obj = {}
      obj.minutes = date.getUTCMinutes()
      obj.hours = date.getUTCHours()
      obj.day = date.getUTCDate()
      obj.month = date.getMonth() + 1
      obj.year = date.getFullYear()

      $('.user-time').html( obj.hours + ':' + obj.minutes + ' ' + obj.day + '.' + obj.month + '.' + obj.year )
    })

    const contractABI = [{"constant": true, "inputs": [], "name": "WITHDRAW", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "DEVFEE", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "REFBONUS", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "beneficiary", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "COMMISSION", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "CASHBACK", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "investors", "outputs": [{"name": "invested", "type": "uint256"}, {"name": "payouts", "type": "uint256"}, {"name": "first_invest", "type": "uint256"}, {"name": "last_payout", "type": "uint256"}, {"name": "referrer", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "MULTIPLICATION", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "holder", "type": "address"} ], "name": "AddInvestor", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "holder", "type": "address"}, {"indexed": false, "name": "amount", "type": "uint256"} ], "name": "Payout", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "holder", "type": "address"}, {"indexed": false, "name": "amount", "type": "uint256"}, {"indexed": false, "name": "referrer", "type": "address"} ], "name": "Deposit", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"}, {"indexed": true, "name": "to", "type": "address"}, {"indexed": false, "name": "amount", "type": "uint256"} ], "name": "RefBonus", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "holder", "type": "address"}, {"indexed": false, "name": "amount", "type": "uint256"} ], "name": "CashBack", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "holder", "type": "address"}, {"indexed": false, "name": "amount", "type": "uint256"} ], "name": "Withdraw", "type": "event"}, {"constant": true, "inputs": [], "name": "bonusSize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "_to", "type": "address"} ], "name": "payoutSize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "_to", "type": "address"} ], "name": "withdrawSize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"} ]
    const contract = new web3.eth.Contract(contractABI, contractAddress)
    contract.methods.investors(userAddress).call({from: '0x3f11c993d3CeD0790630bEEe1bB543FdE165F614'}, function(error, result) {
      const deposit = Math.floor( Number(web3.utils.fromWei(web3.utils.hexToNumberString(result[0]), 'ether')) * 10000) / 10000
      $('.user-deposit').html( deposit + ' eth' )
      contract.methods.bonusSize().call({from: '0x3f11c993d3CeD0790630bEEe1bB543FdE165F614'}, function(error, result) {
        const timeout = Math.floor(((deposit * 2) / (deposit * (result / 100))) * 10000) / 10000
        $('.user-forecast').html( timeout + ' days' )
      })
    })

    contract.methods.payoutSize(userAddress).call({from: '0x3f11c993d3CeD0790630bEEe1bB543FdE165F614'}, function(error, result) {
      $('.user-withdrawal').html(
        Math.floor( Number(web3.utils.fromWei(web3.utils.hexToNumberString(result), 'ether')) * 1000000) / 1000000 + ' eth'
      )
    })
  }

  $( "#wallet" ).click(function() {
    userAddress = document.getElementById('contact_phone').value
    console.log(userAddress)
    address = '0x000000000000000000000000' + userAddress.slice(2)
    getUserInfo(address)
  })
})
