const path = require('path');
const fs = require('fs-extra');
const tasuku = require('tasuku');

const ansiRegexPackageJsonPath = path.resolve(__dirname, 'node_modules/ansi-regex/package.json');

async function removeTypePropertyInAnsiRegexPackageJson({ nestedTask = tasuku } = {}) {
    return await nestedTask('Update package.json in "ansi-regex" library', async ({ setTitle }) => {
        try {
            const content = await fs.readJSON(ansiRegexPackageJsonPath);
            delete content['type'];
            await fs.writeJson(ansiRegexPackageJsonPath, content);
            setTitle('Update package.json in "ansi-regex" library. Status: success.');
        } catch (e) {
            setTitle(
                `Update package.json in "ansi-regex" library. Status: false. Error: ${e.message}.`,
            );
        }
    });
}

exports.removeTypePropertyInAnsiRegexPackageJson = removeTypePropertyInAnsiRegexPackageJson;
