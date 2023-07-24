const path = require('path')
const fs = require('fs')
const deepFreeze = require('deep-freeze')


const cgfFiles = fs.readdirSync(__dirname).filter((file) => {
    if (path.extname(file) !=='.js' || path.basename(file) ==='index.js' ){
        return false;
    }
    return true;
});


const config = {};
// построим полный путь к файлу и добавим в конфиг
cgfFiles.forEach((filename) => {
  // построим полный путь
  const configName = path.basename(filename, '.js');
  console.log(configName)
  const filepath = path.resolve(__dirname, filename);
  console.log(`filepathc`,filepath);
  const store = require(filepath);
  console.log(`store`,store);

  // добавим в конфиг
  config[configName] = store;
  console.log(`config`,config);
});

// фризим конфиги, чтобы никто случайно их не поломал в процесе работы приложения.
deepFreeze(config);

// шарим
module.exports = config;
