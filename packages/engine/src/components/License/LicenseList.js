export const LicenseList = () => {
  var i;
  const licenses = []

  for (i = 0; i < 101; i++) {
    licenses.push["MotorLicense-"+i]
  }
  console.log(licenses)
  return licenses
}
