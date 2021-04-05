const _ = require('lodash')
const fs = require('fs');
const zpZeroOne = require('./zpZeroOne')
const readXlsxFile = require("read-excel-file/node");





readXlsxFile(`./IN/template.xlsx`).then((rows) => {
    let keys = rows[0]
    let hollowObj = class {}

    // console.log(rows[0])
    let str = ''
    for(let i = 0; i < rows[0].length; i++ ) {
        hollowObj[rows[0][i]] = ''
    }
    hollowObj['KSCHL']= 0

    // console.log(hollowObj)
    
    rows.shift()
    // console.log(rows)
    let arr = []

    for (let i = 0; i < rows.length; i++) {
        
        let temp = _.cloneDeep(hollowObj)
        
        for (let j = 0; j < rows[i].length; j++) {
            temp[keys[j]] = rows[i][j]
        }
        
        arr.push(temp)
    }

    console.log(arr)
   
    for (let i = 0; i < arr.length; i++) {
        let zp01 = new zpZeroOne()
        for(let prop in zp01) {
            zp01[prop] = arr[i][prop]
        }
        console.log(zp01)
    }

})