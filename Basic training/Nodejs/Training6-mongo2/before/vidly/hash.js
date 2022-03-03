const bcrypt = require('bcrypt');
const func = require('joi/lib/types/func');

async function run() {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash('Anthony', salt);
    console.log(salt);
    console.log(hashed);
}

run();