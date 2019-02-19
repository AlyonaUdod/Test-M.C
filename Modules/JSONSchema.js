module.exports.JSONSchema = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "phone": {
        "type": "number"
      },
      "person": {
        "type": "object",
        "properties": {
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          }
        },
        "required": [
          "firstName",
          "lastName"
        ]
      },
      "amount": {
        "type": "number"
      },
      "date": {
        "type": "string"
      },
      "costCenterNum": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "phone",
      "person",
      "amount",
      "date",
      "costCenterNum"
    ]
  }
