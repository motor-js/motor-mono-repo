import CryptoAES from 'crypto-js/aes'
import CryptoENC from 'crypto-js/enc-utf8'
import CryptoJS from 'crypto-js'
import License from "./License";
import { LicenseList } from "./LicenseList"

export function EncryptLicense () {
  const list = LicenseList()
  console.log(list)
  //list.map(data => console.log(data))

  var encrypt = CryptoAES.encrypt("MotorLicense-1", "S@few/M0t0r");
  var decrypt = CryptoAES.decrypt(encrypt.toString(), "S@few/M0t0r");
  
  //var decrypt = CryptoAES.decrypt('U2FsdGVkX18F0eIS4Rkz49TnlMpqP3Yfos8sRJ/GvNY=', "S@few/M0t0r");
  console.log(decrypt.toString(CryptoENC))
  console.log(decrypt.toString(CryptoJS.enc.Hex))

}
