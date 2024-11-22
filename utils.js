//@ts-check
const defaultGroups = {
	'accessor-pairs': [{ 'accessorPair': true, 'sort': 'alphabetical' }],
	'accessors': [{ 'kind': 'get', 'accessorPair': false, 'sort': 'alphabetical' }, { 'kind': 'set', 'accessorPair': false, 'sort': 'alphabetical' }],
	'methods': [{ 'type': 'method', 'sort': 'alphabetical' }],
	'private-accessor-pairs': [{ 'name': '/(_|#).+/', 'accessorPair': true, 'sort': 'alphabetical' }],
	'private-accessors': [{ 'name': '/(_|#).+/', 'kind': 'get', 'accessorPair': false, 'sort': 'alphabetical' }, { 'name': '/(_|#).+/', 'kind': 'set', 'accessorPair': false, 'sort': 'alphabetical' }],
	'private-methods': [{ 'name': '/(_|#).+/', 'type': 'method', 'sort': 'alphabetical' }],
	'private-properties': [{ 'name': '/(_|#).+/', 'type': 'property', 'sort': 'none' }],
	'properties': [{ 'type': 'property', 'sort': 'none' }],
	'static-methods': [{ 'type': 'method', 'sort': 'alphabetical', 'static': true }],
	'static-properties': [{ 'type': 'property', 'sort': 'none', 'static': true }]
};

const defaultOrder = [
	'[static-properties]',
	'[static-methods]',
	'[properties]',
	'constructor',
	'[accessor-pairs]',
	'[accessors]',
	'[methods]',
	'[private-properties]',
	'[private-accessor-pairs]',
	'[private-accessors]',
	'[private-methods]'
];

export const getSortMemberRules = (order, groups) => {
	return {
		'sort-class-members/sort-class-members': [2, {
			'order': order ? order : defaultOrder,
			'groups': { ...defaultGroups, ...groups },
			'accessorPairPositioning': 'getThenSet'
		}]
	};
};

export function setDirectoryConfigs(globalConfig, directoryConfigs) {
	const configs = globalConfig.map(c => ({ ...c }));
	for (const dir in directoryConfigs) {
		const pattern = `${dir}/**/*`;
		for (const baseConfig of configs) {
			if (!(baseConfig.ignores)) baseConfig.ignores = [];
			baseConfig.ignores.push(pattern);
		}

		for (const dirConfig of directoryConfigs[dir]) {
			const files = dirConfig.files ? dirConfig.files.map(f => {
				if (f.startsWith('./')) return `${dir}${f.slice(1)}`;
				if (f.startsWith('*')) return `${dir}${f}`;
				return `${dir}/${f}`;
			}) : [pattern];
			configs.push({
				...dirConfig,
				files
			});
		}
	}

	return configs;
}

export function addExtensions(config, extensions) {
	return config.map(c => {
		const newFiles = [];
		for (const f of (c.files ?? ['**/*'])) {
			if (f.includes('.')) newFiles.push(f);
			else {
				for (const ext of extensions)
					newFiles.push(`${f}${f.endsWith('*') ? '' : '*'}${ext}`);
			}
		}
		return {
			...c,
			files: newFiles
		};
	});
}
