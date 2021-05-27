
const createLicense = () => {

  const licenseList = []

  var i;
  for (i = 1; i < 501; i++) {
    licenseList.push('MotorLicense-'+i)
  }

  return licenseList
}

export default createLicense