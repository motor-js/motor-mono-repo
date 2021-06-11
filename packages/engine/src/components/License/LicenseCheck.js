import CryptoAES from 'crypto-js/aes'
import CryptoENC from 'crypto-js/enc-utf8'
import CryptoJS from 'crypto-js'
import License from "./License";
import { LicenseList } from "./LicenseList"

export function LicenseCheck (userInput) {
  
  var i;
  const licenses = []
  const encryptedList = []

  for (i = 0; i < 101; i++) {
    licenses.push("MotorLicense-"+i)
  }
  
  var decrypt = CryptoAES.decrypt(userInput, "S@few/M0t0r");
  var value = decrypt.toString(CryptoENC)
  
  licenses.filter(name => name.includes(value))

  console.log('licenses: ',licenses)


  /*

  var bedrooms = myArray.filter(name => name.includes('bedroom'))


  licenses.map(data => {
    var encrypt = CryptoAES.encrypt(data, "S@few/M0t0r");
    var key = encrypt.toString()
    encryptedList.push(key)
  })
*/
  return encryptedList




  //var encrypt = CryptoAES.encrypt("MotorLicense-1", "S@few/M0t0r");
  //var decrypt = CryptoAES.decrypt(encrypt.toString(), "S@few/M0t0r");
  
  //var decrypt = CryptoAES.decrypt('U2FsdGVkX18F0eIS4Rkz49TnlMpqP3Yfos8sRJ/GvNY=', "S@few/M0t0r");
  //console.log(decrypt.toString(CryptoENC))
  //console.log(decrypt.toString(CryptoJS.enc.Hex))

}
