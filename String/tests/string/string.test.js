describe(`Test string tasks equalChar `, () => {

    describe(`equalChar`, () => {
        const testData = [
            {
                str: `Hello my friend`,
                charF: `l`,
                charS: `e`,
                expected: true,
            },
            {
                str: `Hello my friend`,
                charF: `l`,
                charS: `r`,
                expected: false,
            },
            {
                str: `Hello my friend`,
                charF: `l`,
                charS: `2`,
                expected: false,
            },
            {
                str: `Hello my friend`,
                charF: `l`,
                charS: ` `,
                expected: true,
            },
            {
                str: `Hello my friend`,
                charF: `H`,
                charS: `d`,
                expected: false,
            },

        ];

        testData.forEach(data => {
            const {str, charF, charS, expected} = data;
            const rez = equalChar(str, charF, charS);

            it(`should return ${expected} when rez = ${rez}`, function () {
                assert.strictEqual(rez, expected);
            });
        })
    });

    describe(`truncate`, () => {
        const testData = [
            {
                str: `Hello`,
                maxLenght: 5,
                expected: `Hello`,
            },
            {
                str: `Helloo`,
                maxLenght: 5,
                expected: `Hello...`,
            },
            {
                str: `Hello JS`,
                maxLenght: 5,
                expected: `Hello...`,
            },
            {
                str: `Hello JS`,
                maxLenght: 2,
                expected: `He...`,
            },
        ];

        testData.forEach(data => {
            const {str, maxLenght, expected} = data;

            const rez = truncate(str, maxLenght);

            it(`should return ${expected} when rez = ${rez}`, function () {
                assert.strictEqual(rez, expected);
            });
        })
    });

    describe(`removeStr`, () => {
        const testData = [
            {
                str: `Hellollasdl`,
                strSearch: `l`,
                expected: `Heoasd`,
            },
            {
                str: `Hellollasdl`,
                strSearch: `ll`,
                expected: `Heoasdl`,
            },
            {
                str: `Hellollasdl`,
                strSearch: `l`,
                expected: `Heoasd`,
            },
        ];

        testData.forEach(data => {
            const {str, strSearch, expected} = data;
            const rez = removeStr(str, strSearch);

            it(`should return ${expected} when rez = ${rez}`, function () {
                assert.strictEqual(rez, expected);
            });
        })
    });

});


describe(`Test StringError equalChar method `, () => {

    it(`should return 'Invalid data' `, () => {
        const str = 50;
        const charF = 's';
        const charS = '3';

        assert.throws(() => {
            equalChar(str, charF, charS)
        }, StringError, `Invalid data`);
    });
    it(`should return 'Invalid data' `, () => {
        const str = `50`;
        const charF = undefined;
        const charS = '3';

        assert.throws(() => {
            equalChar(str, charF, charS)
        }, StringError, `Invalid data char`);
    });
    it(`should return 'Invalid data char' `, () => {
        const str = '50';
        const charF = 's';
        const charS = undefined;

        assert.throws(() => {
            equalChar(str, charF, charS)
        }, StringError, `Invalid data char`);
    });
    it(`should return 'Invalid data char' `, () => {
        const str = null;
        const charF = null;
        const charS = null;
        assert.throws(() => {
            equalChar(str, charF, charS)
        }, StringError, `Invalid data`);
    });


});

describe(`Test StringError truncate method `, () => {

    it(`should return 'Invalid str' `, () => {
        const str = 50;
        const maxLenght = 4;

        assert.throws(() => {
            truncate(str, maxLenght)
        }, StringError, `Invalid str`);
    });
    it(`should return 'Invalid str' `, () => {
        const str = null;
        const maxLenght = 4;

        assert.throws(() => {
            truncate(str, maxLenght)
        }, StringError, `Invalid str`);
    });
    it(`should return 'Invalid str' `, () => {
        const str = undefined;
        const maxLenght = 4;

        assert.throws(() => {
            truncate(str, maxLenght)
        }, StringError, `Invalid str`);
    });


    it(`should return 'Invalid data char' `, () => {
        const str = '50';
        const maxLenght = '-1';

        assert.throws(() => {
            truncate(str, maxLenght)
        }, StringError, `Bad maxLenght`);
    });
    it(`should return 'Invalid data char' `, () => {
        const str = '50';
        const maxLenght = -1;

        assert.throws(() => {
            truncate(str, maxLenght)
        }, StringError, `Bad maxLenght`);
    });
    it(`should return 'Invalid data char' `, () => {
        const str = null;
        const maxLenght = null;

        assert.throws(() => {
            truncate(str, maxLenght)
        }, StringError, `Invalid str`);
    });
    it(`should return 'Invalid data char' `, () => {
        const str = undefined;
        const maxLenght = undefined;

        assert.throws(() => {
            truncate(str, maxLenght)
        }, StringError, `Invalid str`);
    });
});
