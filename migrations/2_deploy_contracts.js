/* global artifacts */
var MarketApp = artifacts.require('MarketApp.sol')

module.exports = function(deployer) {
  deployer.deploy(MarketApp)
}
