
'use strict'
const mongoose = require('mongoose');


const connectString = `mongodb://0.0.0.0:27017/admin`

class Databse {
  constructor(){
    this.connect()
  }
  connect(type = 'mongoodb'){
    if(1===1){
      mongoose.set('debug', true),
      mongoose.set('debug', {color: true})
    }
    mongoose.connect(connectString, {
      maxPoolSize: 50
    }).then( _ => {
      console.log(`Connected Mongodb Success`)
    })
    .catch( err => console.log(err))
  }
  static getInstance(){
    if(!Databse.instance){
        Databse.instance = new Databse()
    }
    return Databse.instance
  }
}
const instanceMongodb = Databse.getInstance()
module.exports = instanceMongodb
