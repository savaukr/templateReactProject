type Mods = Record<string, boolean | string>;

export function classNames(
	cls: string,
	mods: Mods = {},
	additional: string[] = [],
): string {
	const modsArr = Object.entries(mods).reduce<string[]>(
		(acc, [classsName, value]) => (value ? [...acc, classsName] : acc),
		[],
	);

	return [cls, ...additional.filter(item => Boolean(item)), ...modsArr].join(
		' ',
	);
}
