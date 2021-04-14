export const flattenData = d => {
    let arr =[];
    let newObj = {}
    d.map((res) => { 
      Object.keys(res).forEach((item) => {
        if(item === 'key') {
          newObj[item] = res[item]
        } else {
        newObj[item] = res[item].text
        }
      })      
      arr.push(newObj)
      newObj = {}
    })
    return arr
}