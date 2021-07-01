import React from "react";
import Table from "./components/TableExampleCompact";
import ButtonComponent from "./components/ButtonComponent";
import { useList } from "@motor-js/engine"

export default function App() {

  const dimension = ['Company Name'];

  const {
    listData
  } = useList({
    dimension,
  });

console.log(listData);


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
