// Run e.g.:
//    node fileCounter.js resources/filecount-simple
import { opendirSync } from 'fs';


countFiles(process.argv[2]).then(count => {
    console.log(`Found ${count} files`);
});


async function countFiles(relativePath) {
    const dir = opendirSync(relativePath);

    return 0;
}

export {
    countFiles
}