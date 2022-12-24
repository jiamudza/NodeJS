import * as fs from 'node:fs';
import * as rl from 'node:readline'

try {
    fs.writeFileSync('contact/contact.json', '[]');
    } catch(err) {
    console.log(err);
}


