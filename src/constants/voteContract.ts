export const voteContractAddress = '0x4cc7232d2d8aEe68896671B498C8c21331B47C39';

export const voteContractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_votingQuestion",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "proposalDescriptions",
        "type": "string[]"
      },
      {
        "internalType": "address",
        "name": "_credentialIssuerAddr",
        "type": "address"
      },
      {
        "internalType": "uint64",
        "name": "_voteScope",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_propositionIndex",
        "type": "uint256"
      }
    ],
    "name": "Voted",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "ZKFirmaDigitalCredentialIssuerAddr",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_nullifier",
        "type": "uint256"
      }
    ],
    "name": "checkVoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "proposalIndex",
        "type": "uint256"
      }
    ],
    "name": "getProposal",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getProposalCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalVotes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "hasVoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "isLessThan3HoursAgo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "voteCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "nullifierSeed",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "nullifier",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "signal",
        "type": "uint256"
      },
      {
        "internalType": "uint256[1]",
        "name": "revealArray",
        "type": "uint256[1]"
      },
      {
        "internalType": "uint256[8]",
        "name": "groth16Proof",
        "type": "uint256[8]"
      }
    ],
    "name": "voteForProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "voteScope",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "votingQuestion",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const voteContractBytecode = {
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001a7e38038062001a7e83398181016040528101906200003791906200049c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836000908162000089919062000797565b5060005b83518110156200012f5760026040518060400160405280868481518110620000ba57620000b96200087e565b5b602002602001015181526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190816200010c919062000797565b5060208201518160010155505080806200012690620008dc565b9150506200008d565b5080600160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505050505062000929565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001cc8262000181565b810181811067ffffffffffffffff82111715620001ee57620001ed62000192565b5b80604052505050565b60006200020362000163565b9050620002118282620001c1565b919050565b600067ffffffffffffffff82111562000234576200023362000192565b5b6200023f8262000181565b9050602081019050919050565b60005b838110156200026c5780820151818401526020810190506200024f565b60008484015250505050565b60006200028f620002898462000216565b620001f7565b905082815260208101848484011115620002ae57620002ad6200017c565b5b620002bb8482856200024c565b509392505050565b600082601f830112620002db57620002da62000177565b5b8151620002ed84826020860162000278565b91505092915050565b600067ffffffffffffffff82111562000314576200031362000192565b5b602082029050602081019050919050565b600080fd5b6000620003416200033b84620002f6565b620001f7565b9050808382526020820190506020840283018581111562000367576200036662000325565b5b835b81811015620003b557805167ffffffffffffffff81111562000390576200038f62000177565b5b8086016200039f8982620002c3565b8552602085019450505060208101905062000369565b5050509392505050565b600082601f830112620003d757620003d662000177565b5b8151620003e98482602086016200032a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200041f82620003f2565b9050919050565b620004318162000412565b81146200043d57600080fd5b50565b600081519050620004518162000426565b92915050565b600067ffffffffffffffff82169050919050565b620004768162000457565b81146200048257600080fd5b50565b60008151905062000496816200046b565b92915050565b60008060008060808587031215620004b957620004b86200016d565b5b600085015167ffffffffffffffff811115620004da57620004d962000172565b5b620004e887828801620002c3565b945050602085015167ffffffffffffffff8111156200050c576200050b62000172565b5b6200051a87828801620003bf565b93505060406200052d8782880162000440565b9250506060620005408782880162000485565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200059f57607f821691505b602082108103620005b557620005b462000557565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200061f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620005e0565b6200062b8683620005e0565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000678620006726200066c8462000643565b6200064d565b62000643565b9050919050565b6000819050919050565b620006948362000657565b620006ac620006a3826200067f565b848454620005ed565b825550505050565b600090565b620006c3620006b4565b620006d081848462000689565b505050565b5b81811015620006f857620006ec600082620006b9565b600181019050620006d6565b5050565b601f82111562000747576200071181620005bb565b6200071c84620005d0565b810160208510156200072c578190505b620007446200073b85620005d0565b830182620006d5565b50505b505050565b600082821c905092915050565b60006200076c600019846008026200074c565b1980831691505092915050565b600062000787838362000759565b9150826002028217905092915050565b620007a2826200054c565b67ffffffffffffffff811115620007be57620007bd62000192565b5b620007ca825462000586565b620007d7828285620006fc565b600060209050601f8311600181146200080f5760008415620007fa578287015190505b62000806858262000779565b86555062000876565b601f1984166200081f86620005bb565b60005b82811015620008495784890151825560018201915060208501945060208101905062000822565b8683101562000869578489015162000865601f89168262000759565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008e98262000643565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200091e576200091d620008ad565b5b600182019050919050565b61114580620009396000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80637f7658ff116100715780637f7658ff1461017b5780639a0e7d6614610199578063ab99f655146101b7578063c08cc02d146101d3578063c7f758a8146101f1578063ecca031f14610222576100a9565b8063013cf08b146100ae5780631ec7ea8f146100df578063283419ae1461010f5780632bab85d01461012d578063470d8c2c1461014b575b600080fd5b6100c860048036038101906100c3919061091d565b610252565b6040516100d69291906109e9565b60405180910390f35b6100f960048036038101906100f4919061091d565b61030e565b6040516101069190610a34565b60405180910390f35b610117610319565b6040516101249190610a90565b60405180910390f35b61013561033f565b6040516101429190610ace565b60405180910390f35b6101656004803603810190610160919061091d565b610359565b6040516101729190610a34565b60405180910390f35b610183610383565b6040516101909190610ae9565b60405180910390f35b6101a1610411565b6040516101ae9190610b0b565b60405180910390f35b6101d160048036038101906101cc9190610b6f565b61047c565b005b6101db610769565b6040516101e89190610b0b565b60405180910390f35b61020b6004803603810190610206919061091d565b610776565b6040516102199291906109e9565b60405180910390f35b61023c6004803603810190610237919061091d565b6108a2565b6040516102499190610a34565b60405180910390f35b6002818154811061026257600080fd5b906000526020600020906002020160009150905080600001805461028590610c2c565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610c2c565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050908060010154905082565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160149054906101000a900467ffffffffffffffff1681565b60006003600083815260200190815260200160002060009054906101000a900460ff169050919050565b6000805461039090610c2c565b80601f01602080910402602001604051908101604052809291908181526020018280546103bc90610c2c565b80156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b505050505081565b600080600090506000600280549050905060005b81811015610473576002818154811061044157610440610c5d565b5b9060005260206000209060020201600101548361045e9190610cbb565b9250808061046b90610cef565b915050610425565b50819250505090565b6000610487336108c2565b905060028054905087106104d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c790610da9565b60405180910390fd5b838114610512576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050990610e3b565b60405180910390fd5b85600160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1614610574576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056b90610ef3565b60405180910390fd5b61057e600061030e565b6105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b490610fd1565b60405180910390fd5b6003600086815260200190815260200160002060009054906101000a900460ff161561061e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061590611063565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663514e974d8288888888886040518763ffffffff1660e01b8152600401610683969594939291906110ad565b600060405180830381600087803b15801561069d57600080fd5b505af11580156106b1573d6000803e3d6000fd5b50505050600287815481106106c9576106c8610c5d565b5b906000526020600020906002020160010160008154809291906106eb90610cef565b919050555060016003600087815260200190815260200160002060006101000a81548160ff021916908315150217905550863373ffffffffffffffffffffffffffffffffffffffff167f4d99b957a2bc29a30ebd96a7be8e68fe50a3c701db28a91436490b7d53870ca460405160405180910390a350505050505050565b6000600280549050905090565b6060600060028054905083106107c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b890610da9565b60405180910390fd5b6000600284815481106107d7576107d6610c5d565b5b906000526020600020906002020160405180604001604052908160008201805461080090610c2c565b80601f016020809104026020016040519081016040528092919081815260200182805461082c90610c2c565b80156108795780601f1061084e57610100808354040283529160200191610879565b820191906000526020600020905b81548152906001019060200180831161085c57829003601f168201915b505050505081526020016001820154815250509050806000015181602001519250925050915091565b60036020528060005260406000206000915054906101000a900460ff1681565b60008173ffffffffffffffffffffffffffffffffffffffff169050919050565b600080fd5b6000819050919050565b6108fa816108e7565b811461090557600080fd5b50565b600081359050610917816108f1565b92915050565b600060208284031215610933576109326108e2565b5b600061094184828501610908565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610984578082015181840152602081019050610969565b60008484015250505050565b6000601f19601f8301169050919050565b60006109ac8261094a565b6109b68185610955565b93506109c6818560208601610966565b6109cf81610990565b840191505092915050565b6109e3816108e7565b82525050565b60006040820190508181036000830152610a0381856109a1565b9050610a1260208301846109da565b9392505050565b60008115159050919050565b610a2e81610a19565b82525050565b6000602082019050610a496000830184610a25565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a7a82610a4f565b9050919050565b610a8a81610a6f565b82525050565b6000602082019050610aa56000830184610a81565b92915050565b600067ffffffffffffffff82169050919050565b610ac881610aab565b82525050565b6000602082019050610ae36000830184610abf565b92915050565b60006020820190508181036000830152610b0381846109a1565b905092915050565b6000602082019050610b2060008301846109da565b92915050565b600080fd5b600081905082602060010282011115610b4757610b46610b26565b5b92915050565b600081905082602060080282011115610b6957610b68610b26565b5b92915050565b6000806000806000806101a08789031215610b8d57610b8c6108e2565b5b6000610b9b89828a01610908565b9650506020610bac89828a01610908565b9550506040610bbd89828a01610908565b9450506060610bce89828a01610908565b9350506080610bdf89828a01610b2b565b92505060a0610bf089828a01610b4d565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c4457607f821691505b602082108103610c5757610c56610bfd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cc6826108e7565b9150610cd1836108e7565b9250828201905080821115610ce957610ce8610c8c565b5b92915050565b6000610cfa826108e7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610d2c57610d2b610c8c565b5b600182019050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a20496e76616c696420707260008201527f6f706f73616c20696e6465780000000000000000000000000000000000000000602082015250565b6000610d93602c83610955565b9150610d9e82610d37565b604082019050919050565b60006020820190508181036000830152610dc281610d86565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a2057726f6e67207573657260008201527f207369676e616c2073656e742e00000000000000000000000000000000000000602082015250565b6000610e25602d83610955565b9150610e3082610dc9565b604082019050919050565b60006020820190508181036000830152610e5481610e18565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a2057726f6e67206e756c6c60008201527f6966696572536565642c20796f75206d7573742067656e65726174652070726f60208201527f6f6620776974682074686520726967687420736565642e000000000000000000604082015250565b6000610edd605783610955565b9150610ee882610e5b565b606082019050919050565b60006020820190508181036000830152610f0c81610ed0565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a2050726f6f66206d75737460008201527f2062652067656e6572617465642077697468205a4b204669726d61204469676960208201527f74616c2064617461207369676e6564206c657373207468616e203320686f757260408201527f732061676f2e0000000000000000000000000000000000000000000000000000606082015250565b6000610fbb606683610955565b9150610fc682610f13565b608082019050919050565b60006020820190508181036000830152610fea81610fae565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a205573657220686173206160008201527f6c726561647920766f7465640000000000000000000000000000000000000000602082015250565b600061104d602c83610955565b915061105882610ff1565b604082019050919050565b6000602082019050818103600083015261107c81611040565b9050919050565b82818337505050565b61109860208383611083565b5050565b6110a96101008383611083565b5050565b60006101a0820190506110c360008301896109da565b6110d060208301886109da565b6110dd60408301876109da565b6110ea60608301866109da565b6110f7608083018561108c565b61110460a083018461109c565b97965050505050505056fea264697066735822122064c1cbd69a2d86f27dbe57fce69841d7bace3c3b9a365c2c7ccf082bf83301cf64736f6c63430008140033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80637f7658ff116100715780637f7658ff1461017b5780639a0e7d6614610199578063ab99f655146101b7578063c08cc02d146101d3578063c7f758a8146101f1578063ecca031f14610222576100a9565b8063013cf08b146100ae5780631ec7ea8f146100df578063283419ae1461010f5780632bab85d01461012d578063470d8c2c1461014b575b600080fd5b6100c860048036038101906100c3919061091d565b610252565b6040516100d69291906109e9565b60405180910390f35b6100f960048036038101906100f4919061091d565b61030e565b6040516101069190610a34565b60405180910390f35b610117610319565b6040516101249190610a90565b60405180910390f35b61013561033f565b6040516101429190610ace565b60405180910390f35b6101656004803603810190610160919061091d565b610359565b6040516101729190610a34565b60405180910390f35b610183610383565b6040516101909190610ae9565b60405180910390f35b6101a1610411565b6040516101ae9190610b0b565b60405180910390f35b6101d160048036038101906101cc9190610b6f565b61047c565b005b6101db610769565b6040516101e89190610b0b565b60405180910390f35b61020b6004803603810190610206919061091d565b610776565b6040516102199291906109e9565b60405180910390f35b61023c6004803603810190610237919061091d565b6108a2565b6040516102499190610a34565b60405180910390f35b6002818154811061026257600080fd5b906000526020600020906002020160009150905080600001805461028590610c2c565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610c2c565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050908060010154905082565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160149054906101000a900467ffffffffffffffff1681565b60006003600083815260200190815260200160002060009054906101000a900460ff169050919050565b6000805461039090610c2c565b80601f01602080910402602001604051908101604052809291908181526020018280546103bc90610c2c565b80156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b505050505081565b600080600090506000600280549050905060005b81811015610473576002818154811061044157610440610c5d565b5b9060005260206000209060020201600101548361045e9190610cbb565b9250808061046b90610cef565b915050610425565b50819250505090565b6000610487336108c2565b905060028054905087106104d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c790610da9565b60405180910390fd5b838114610512576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050990610e3b565b60405180910390fd5b85600160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1614610574576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056b90610ef3565b60405180910390fd5b61057e600061030e565b6105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b490610fd1565b60405180910390fd5b6003600086815260200190815260200160002060009054906101000a900460ff161561061e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061590611063565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663514e974d8288888888886040518763ffffffff1660e01b8152600401610683969594939291906110ad565b600060405180830381600087803b15801561069d57600080fd5b505af11580156106b1573d6000803e3d6000fd5b50505050600287815481106106c9576106c8610c5d565b5b906000526020600020906002020160010160008154809291906106eb90610cef565b919050555060016003600087815260200190815260200160002060006101000a81548160ff021916908315150217905550863373ffffffffffffffffffffffffffffffffffffffff167f4d99b957a2bc29a30ebd96a7be8e68fe50a3c701db28a91436490b7d53870ca460405160405180910390a350505050505050565b6000600280549050905090565b6060600060028054905083106107c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b890610da9565b60405180910390fd5b6000600284815481106107d7576107d6610c5d565b5b906000526020600020906002020160405180604001604052908160008201805461080090610c2c565b80601f016020809104026020016040519081016040528092919081815260200182805461082c90610c2c565b80156108795780601f1061084e57610100808354040283529160200191610879565b820191906000526020600020905b81548152906001019060200180831161085c57829003601f168201915b505050505081526020016001820154815250509050806000015181602001519250925050915091565b60036020528060005260406000206000915054906101000a900460ff1681565b60008173ffffffffffffffffffffffffffffffffffffffff169050919050565b600080fd5b6000819050919050565b6108fa816108e7565b811461090557600080fd5b50565b600081359050610917816108f1565b92915050565b600060208284031215610933576109326108e2565b5b600061094184828501610908565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610984578082015181840152602081019050610969565b60008484015250505050565b6000601f19601f8301169050919050565b60006109ac8261094a565b6109b68185610955565b93506109c6818560208601610966565b6109cf81610990565b840191505092915050565b6109e3816108e7565b82525050565b60006040820190508181036000830152610a0381856109a1565b9050610a1260208301846109da565b9392505050565b60008115159050919050565b610a2e81610a19565b82525050565b6000602082019050610a496000830184610a25565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a7a82610a4f565b9050919050565b610a8a81610a6f565b82525050565b6000602082019050610aa56000830184610a81565b92915050565b600067ffffffffffffffff82169050919050565b610ac881610aab565b82525050565b6000602082019050610ae36000830184610abf565b92915050565b60006020820190508181036000830152610b0381846109a1565b905092915050565b6000602082019050610b2060008301846109da565b92915050565b600080fd5b600081905082602060010282011115610b4757610b46610b26565b5b92915050565b600081905082602060080282011115610b6957610b68610b26565b5b92915050565b6000806000806000806101a08789031215610b8d57610b8c6108e2565b5b6000610b9b89828a01610908565b9650506020610bac89828a01610908565b9550506040610bbd89828a01610908565b9450506060610bce89828a01610908565b9350506080610bdf89828a01610b2b565b92505060a0610bf089828a01610b4d565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c4457607f821691505b602082108103610c5757610c56610bfd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cc6826108e7565b9150610cd1836108e7565b9250828201905080821115610ce957610ce8610c8c565b5b92915050565b6000610cfa826108e7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610d2c57610d2b610c8c565b5b600182019050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a20496e76616c696420707260008201527f6f706f73616c20696e6465780000000000000000000000000000000000000000602082015250565b6000610d93602c83610955565b9150610d9e82610d37565b604082019050919050565b60006020820190508181036000830152610dc281610d86565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a2057726f6e67207573657260008201527f207369676e616c2073656e742e00000000000000000000000000000000000000602082015250565b6000610e25602d83610955565b9150610e3082610dc9565b604082019050919050565b60006020820190508181036000830152610e5481610e18565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a2057726f6e67206e756c6c60008201527f6966696572536565642c20796f75206d7573742067656e65726174652070726f60208201527f6f6620776974682074686520726967687420736565642e000000000000000000604082015250565b6000610edd605783610955565b9150610ee882610e5b565b606082019050919050565b60006020820190508181036000830152610f0c81610ed0565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a2050726f6f66206d75737460008201527f2062652067656e6572617465642077697468205a4b204669726d61204469676960208201527f74616c2064617461207369676e6564206c657373207468616e203320686f757260408201527f732061676f2e0000000000000000000000000000000000000000000000000000606082015250565b6000610fbb606683610955565b9150610fc682610f13565b608082019050919050565b60006020820190508181036000830152610fea81610fae565b9050919050565b7f5b5a4b4669726d614469676974616c566f74655d3a205573657220686173206160008201527f6c726561647920766f7465640000000000000000000000000000000000000000602082015250565b600061104d602c83610955565b915061105882610ff1565b604082019050919050565b6000602082019050818103600083015261107c81611040565b9050919050565b82818337505050565b61109860208383611083565b5050565b6110a96101008383611083565b5050565b60006101a0820190506110c360008301896109da565b6110d060208301886109da565b6110dd60408301876109da565b6110ea60608301866109da565b6110f7608083018561108c565b61110460a083018461109c565b97965050505050505056fea264697066735822122064c1cbd69a2d86f27dbe57fce69841d7bace3c3b9a365c2c7ccf082bf83301cf64736f6c63430008140033"
};