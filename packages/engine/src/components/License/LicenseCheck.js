import CryptoAES from 'crypto-js/aes'
import CryptoENC from 'crypto-js/enc-utf8'

export function LicenseCheck (userInput) {
  var i
  var check
  const licenses = []

  //Create array of unencrypted licernses
  for (i = 1; i < 101; i++) {
    licenses.push("MotorLicense-"+i)
  }

  var decrypt = CryptoAES.decrypt(userInput, "S@few/M0t0r");
  var input = decrypt.toString(CryptoENC)

  //filter license
  var licenseExists = licenses.filter(lic => { return lic == input } );

  licenseExists.length > 0 ? check = true :  check = false
  return check
}
