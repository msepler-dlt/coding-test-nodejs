import assert from 'assert';
import { countFiles } from '../fileCounter.js';


describe('countFiles() should return the correct count of files', () => {

    it('for a simple case', () => {
        const result = countFiles('resources/filecount-simple')
        assert.equal(result, 2);
    });

});
