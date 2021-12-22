const TestToken = artifacts.require("TestToken");

module.exports = function (deployer,_networks,accounts) {
    var initialSupply = "1000000000000000000000000"
    deployer.deploy(TestToken,web3.utils.toBN(initialSupply),{from: accounts[0]});
};
