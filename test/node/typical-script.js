import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

async function readPackageName() {
	const packageFilePath = resolve(process.cwd(), 'package.json');
	const packageContents = await readFile(packageFilePath, 'utf8');
	const packageJson = JSON.parse(packageContents);

	return packageJson.name;
}

const packageName = await readPackageName();
console.log(packageName);
