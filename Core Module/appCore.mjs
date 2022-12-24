import * as fs from 'node:fs';

try {
    fs.writeFileSync('contact/contact.json', '[]');
    } catch(err) {
    console.log(err);
}
