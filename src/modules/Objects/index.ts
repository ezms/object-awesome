export class Objects {
	public static nonNull(anything: any): boolean {
		return anything !== null && typeof anything !== 'undefined';
	}

	public static isNull(anything: any): boolean {
		return anything === null || typeof anything === 'undefined';
	}

	public static requireNonNull(...stuff: any): boolean {
		if (this.nonNull(stuff)) return true;
		throw new TypeError(`The object(s) ${stuff} has null value(s)`);
	}

	public static equals(item1: any, item2: any): boolean {
		return item1 === item2 || this.nonNull(item1) === item2;
	}

	public static strictEquals(item1: any, item2: any): boolean {
		return this.nonNull(item1) === this.nonNull(item2);
	}

	public static clone(obj: any): any {
		if (obj instanceof Object) return { ...obj };
		throw new Error('Object not cloneable');
	}
}
