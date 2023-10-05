export function objToArr<TObj extends Record<string, unknown>>(obj: TObj) {
	return Object.values(obj);
}
