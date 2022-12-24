import * as fs from 'node:fs';

fs.writeFile('data/data.json', "hello world", err => {
    console.log(err);
})
