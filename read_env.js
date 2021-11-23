const fs = require('fs')

let read_env = function (envFile) {
    
    if (!fs.existsSync(envFile)){
        throw new Error('file does not exist');
    }

    const dotenv = require('dotenv').config({ path: envFile });
    console.log("loading .env file from " + envFile);
    
    const returnedMap = {};
    for (const key in dotenv.parsed) {
        const value = dotenv.parsed[key];
        const lowercase_key = key.toLocaleLowerCase()
        returnedMap[lowercase_key] = value;
    }
    return returnedMap;
}

module.exports = read_env;