
const createLicense = () => {

  const licenseList = []

  var i;
  for (i = 1; i < 101; i++) {
    licenseList.push('MotorLicense-'+i)
  }

  return licenseList
}

export default createLicense