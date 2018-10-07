const {Schema} = require('mongoose')

const WordSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {timestamps: {}})

module.exports = {
  WordSchema
}