import License from "./License";
import LicenseList from "./LicenseList"

const DecryptLicense = () => {

  LicenseList.map(data => console.log(data))

  var encrypt = CryptoAES.encrypt("MotorLicense-1", "S@few/M0t0r");
  var decrypt = CryptoAES.decrypt(encrypt.toString(), "S@few/M0t0r");
  
  //var decrypt = CryptoAES.decrypt('U2FsdGVkX18F0eIS4Rkz49TnlMpqP3Yfos8sRJ/GvNY=', "S@few/M0t0r");
  console.log(decrypt.toString(CryptoENC))
  console.log(decrypt.toString(CryptoJS.enc.Hex))

}

export default DecryptLicense