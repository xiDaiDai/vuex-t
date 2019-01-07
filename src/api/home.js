const info = {
  firstName: 'x',
  lastName: 'ss',
  gender: 'M',
  location: 'JN'
}

export default {
  getInfo (cb) {
    return cb(info)
  }
}
