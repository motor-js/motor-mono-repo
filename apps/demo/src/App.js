import Table from './components/TableExampleCompact'
import CryptoAES from 'crypto-js/aes'
import CryptoENC from 'crypto-js/enc-utf8'
import CryptoJS from 'crypto-js'

export default function App() {

  /*
//const items = createLicense()
// Array of MotorLicense1,2,3 ....

// Encrypt all the keys using "U2FsdGVkX18F0eIS4Rkz49TnlMpqP3Yfos8sRJ/GvNY="

// User enters the license key into motor -> lookup against encrypted key list and return true or false 

// In module, create a list of hashes
var encrypt = CryptoAES.encrypt("MotorLicense-1", "S@few/M0t0r");
var decrypt = CryptoAES.decrypt(encrypt.toString(), "S@few/M0t0r");

//var decrypt = CryptoAES.decrypt('U2FsdGVkX18F0eIS4Rkz49TnlMpqP3Yfos8sRJ/GvNY=', "S@few/M0t0r");
console.log(decrypt.toString(CryptoENC))
console.log(decrypt.toString(CryptoJS.enc.Hex))
*/

  return (
    <div className="App" style={{ hieght: "3000px" }}>
      {/*<ButtonComponent />*/}
      <Table />
    </div>
  );
}
