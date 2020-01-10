const fs = require('fs')

fs.readFile('./data_json/goods.json','utf8', function(err, data) {
  let newData = JSON.parse(data)
  let pushData = []
  newData.RECORDS.map((value, index) => {
    if(value.IMAGE1 != null){
      pushData.push(value)
    }
  })
  fs.writeFile('./data_json/newGoods.json', JSON.stringify(pushData), function(err){
    if(err) console.log('写入商品失败')
    else console.log('写入商品成功')
  })
})
