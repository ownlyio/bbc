const nftStakingAddress = "0x8f31E7190b8088196D8210EaE17e63De85Ed43Fa"
const nftStakingAbi = [
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":false,
                "internalType":"address",
                "name":"previousAdmin",
                "type":"address"
            },
            {
                "indexed":false,
                "internalType":"address",
                "name":"newAdmin",
                "type":"address"
            }
        ],
        "name":"AdminChanged",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"beacon",
                "type":"address"
            }
        ],
        "name":"BeaconUpgraded",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"previousOwner",
                "type":"address"
            },
            {
                "indexed":true,
                "internalType":"address",
                "name":"newOwner",
                "type":"address"
            }
        ],
        "name":"OwnershipTransferred",
        "type":"event"
    },
    {
        "anonymous":false,
        "inputs":[
            {
                "indexed":true,
                "internalType":"address",
                "name":"implementation",
                "type":"address"
            }
        ],
        "name":"Upgraded",
        "type":"event"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"account",
                "type":"address"
            },
            {
                "internalType":"address",
                "name":"nftContractAddress",
                "type":"address"
            }
        ],
        "name":"getCurrentStakingItemId",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"account",
                "type":"address"
            },
            {
                "internalType":"address",
                "name":"nftContractAddress",
                "type":"address"
            }
        ],
        "name":"getMintedStakingItemId",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"stakingItemId",
                "type":"uint256"
            }
        ],
        "name":"getStakingItem",
        "outputs":[
            {
                "components":[
                    {
                        "internalType":"address",
                        "name":"nftContractAddress",
                        "type":"address"
                    },
                    {
                        "internalType":"address",
                        "name":"account",
                        "type":"address"
                    },
                    {
                        "internalType":"uint256",
                        "name":"amount",
                        "type":"uint256"
                    },
                    {
                        "internalType":"uint256",
                        "name":"startTime",
                        "type":"uint256"
                    },
                    {
                        "internalType":"bool",
                        "name":"isWithdrawnWithoutMinting",
                        "type":"bool"
                    },
                    {
                        "internalType":"bool",
                        "name":"isClaimed",
                        "type":"bool"
                    }
                ],
                "internalType":"struct NFTStaking.StakingItem",
                "name":"",
                "type":"tuple"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"stakingItemId",
                "type":"uint256"
            }
        ],
        "name":"getStakingItemAccount",
        "outputs":[
            {
                "internalType":"address",
                "name":"",
                "type":"address"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"stakingItemId",
                "type":"uint256"
            }
        ],
        "name":"getStakingItemAmount",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"account",
                "type":"address"
            },
            {
                "internalType":"address",
                "name":"nftContractAddress",
                "type":"address"
            }
        ],
        "name":"getStakingItemId",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            
        ],
        "name":"getStakingItemIdHeight",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"stakingItemId",
                "type":"uint256"
            }
        ],
        "name":"getStakingItemIsClaimed",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"stakingItemId",
                "type":"uint256"
            }
        ],
        "name":"getStakingItemIsWithdrawnWithoutMinting",
        "outputs":[
            {
                "internalType":"bool",
                "name":"",
                "type":"bool"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"stakingItemId",
                "type":"uint256"
            }
        ],
        "name":"getStakingItemNftContractAddress",
        "outputs":[
            {
                "internalType":"address",
                "name":"",
                "type":"address"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"stakingItemId",
                "type":"uint256"
            }
        ],
        "name":"getStakingItemStartTime",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            
        ],
        "name":"getStakingTokenAddress",
        "outputs":[
            {
                "internalType":"address",
                "name":"",
                "type":"address"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            
        ],
        "name":"initialize",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            
        ],
        "name":"owner",
        "outputs":[
            {
                "internalType":"address",
                "name":"",
                "type":"address"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"nftContractAddress",
                "type":"address"
            }
        ],
        "name":"remainingRewards",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            
        ],
        "name":"renounceOwnership",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"nftContractAddress",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"quantity",
                "type":"uint256"
            }
        ],
        "name":"setCollectionMaxStaking",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            
        ],
        "name":"setFirstStakingItemAsEmpty",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"_idToStakingItem",
                "type":"uint256"
            }
        ],
        "name":"setStakingItemAsClaimed",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address payable",
                "name":"_stakingTokenAddress",
                "type":"address"
            }
        ],
        "name":"setStakingTokenAddress",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"_nftContractAddress",
                "type":"address"
            },
            {
                "internalType":"uint256",
                "name":"amount",
                "type":"uint256"
            }
        ],
        "name":"stake",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"nftContractAddress",
                "type":"address"
            }
        ],
        "name":"totalDeposits",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"nftContractAddress",
                "type":"address"
            }
        ],
        "name":"totalStakes",
        "outputs":[
            {
                "internalType":"uint256",
                "name":"",
                "type":"uint256"
            }
        ],
        "stateMutability":"view",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"newOwner",
                "type":"address"
            }
        ],
        "name":"transferOwnership",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"uint256",
                "name":"_idToStakingItem",
                "type":"uint256"
            }
        ],
        "name":"unstake",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"newImplementation",
                "type":"address"
            }
        ],
        "name":"upgradeTo",
        "outputs":[
            
        ],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[
            {
                "internalType":"address",
                "name":"newImplementation",
                "type":"address"
            },
            {
                "internalType":"bytes",
                "name":"data",
                "type":"bytes"
            }
        ],
        "name":"upgradeToAndCall",
        "outputs":[
            
        ],
        "stateMutability":"payable",
        "type":"function"
    },
    {
        "inputs":[
            
        ],
        "name":"version",
        "outputs":[
            {
                "internalType":"string",
                "name":"",
                "type":"string"
            }
        ],
        "stateMutability":"pure",
        "type":"function"
    }
]

export { nftStakingAbi, nftStakingAddress }