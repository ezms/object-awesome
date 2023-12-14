import { Objects } from '../Objects';

export class List<T> extends Array<T> {
	constructor(...itens: Array<T>) {
		super(...itens);
	}

	public addAll(items: List<T> | Array<T>): void {
		this.push(...items);
	}

	public addIgnoringNulls(item: T): void {
		if (Objects.nonNull(item)) this.push(item);
	}

	public addManyIgnoringNulls(items: List<T> | Array<T>): void {
		for (const item of items) {
			this.addIgnoringNulls(item);
		}
	}

	public checkForNullsAndAddAllTo(items: List<T> | Array<T>): void {
		const list: List<T> | Array<T> = [];
		for (const item of items) {
			if (Objects.requireNonNull(item)) {
				list.push(item);
			}
		}
		this.addAll(list);
	}

	public hasNullValues(): boolean {
		for (const item of this) {
			if (Objects.isNull(item)) return true;
		}
		return false;
	}

	public replace(index: number, item: T): void {
		this[index] = item;
	}

	public clear(): void {
		this.length = 0;
	}

	public take(index: number): T {
		return this[index];
	}

	public isEmpty(): boolean {
		return this.length === 0;
	}
}
