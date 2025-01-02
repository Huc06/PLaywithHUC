export const GamerProfileWithCommentsABI = [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_profileId",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "_rating",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "_commentText",
            "type": "string"
          }
        ],
        "name": "addComment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "comments",
        "outputs": [
          {
            "internalType": "address",
            "name": "commenter",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "rating",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "commentText",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
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
            "name": "_hourlyRate",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_username",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_bio",
            "type": "string"
          }
        ],
        "name": "createProfile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_profileId",
            "type": "uint256"
          }
        ],
        "name": "getComments",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "commenter",
                "type": "address"
              },
              {
                "internalType": "uint8",
                "name": "rating",
                "type": "uint8"
              },
              {
                "internalType": "string",
                "name": "commentText",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "createdAt",
                "type": "uint256"
              }
            ],
            "internalType": "struct GamerProfileWithComments.Comment[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_profileId",
            "type": "uint256"
          }
        ],
        "name": "getHires",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "hirer",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountPaid",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "createdAt",
                "type": "uint256"
              }
            ],
            "internalType": "struct GamerProfileWithComments.Hire[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_profileId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_duration",
            "type": "uint256"
          }
        ],
        "name": "hirePlayer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "hires",
        "outputs": [
          {
            "internalType": "address",
            "name": "hirer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountPaid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "profileCount",
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
        "name": "profiles",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "profileId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "hourlyRate",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "username",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "bio",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]