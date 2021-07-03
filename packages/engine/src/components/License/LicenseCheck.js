import CryptoAES from 'crypto-js/aes'
import CryptoENC from 'crypto-js/enc-utf8'

export function LicenseCheck (userInput) {
  
  var i;
  const licenses = []

  //Create array of unencrypted licernses
  for (i = 1; i < 101; i++) {
    licenses.push("MotorLicense-"+i)
  }

  var decrypt = CryptoAES.decrypt(userInput, "S@few/M0t0r");
  var input = decrypt.toString(CryptoENC)

  //filter license
  var licenseExists = licenses.filter(lic => { return lic == input } );

  return licenseExists
}

  /*
  //Encrypt all the licenses
  licenses.map(data => {
    var encrypt = CryptoAES.encrypt(data, "S@few/M0t0r");
    var key = encrypt.toString()
    encryptedList.push(key)
  })
  */


  //var encrypt = CryptoAES.encrypt("MotorLicense-1", "S@few/M0t0r");
  //var decrypt = CryptoAES.decrypt(encrypt.toString(), "S@few/M0t0r");
  
  //var decrypt = CryptoAES.decrypt('U2FsdGVkX18F0eIS4Rkz49TnlMpqP3Yfos8sRJ/GvNY=', "S@few/M0t0r");
  //console.log(decrypt.toString(CryptoENC))
  //console.log(decrypt.toString(CryptoJS.enc.Hex))
