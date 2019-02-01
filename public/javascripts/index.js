var isMomHappy = false

var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: 'Samsung',
      color: 'black',
      type: 's8'
    }
    resolve(phone)
  } else {
    var reason = new Error('Mom is unhappy')
    reject(reason)
  }
})


var askMom = function () {
    willIGetNewPhone
      .then(function (fulfilled) {
        console.log(fulfilled)
      })
      .catch(function (error) {
        console.log(error.message)
      })
  }
  askMom()