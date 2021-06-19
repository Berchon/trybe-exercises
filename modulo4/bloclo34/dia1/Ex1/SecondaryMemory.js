const fs = require('fs')

const DISK_PATH = './disk'

class SecondaryMemory {
  load (value) {
    const disk = fs.readdirSync(DISK_PATH)

    const nextFileName = `${DISK_PATH}/cel${disk.length}`

    fs.writeFileSync(nextFileName, value, (err) => console.log(err.message));
  }

  get (index) {
    const fileName = `${DISK_PATH}/cel${index}`

    return parseFloat(fs.readFileSync(fileName, 'utf-8'));
  }

  clean () {
    fs.rmdirSync(DISK_PATH, { recursive: true })
    fs.mkdirSync(DISK_PATH)
  }
}

module.exports = SecondaryMemory