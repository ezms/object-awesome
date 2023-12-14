import { describe, expect, it } from 'vitest';
import { List } from '../../../../modules/List';

describe('List class tests', () => {
	it('should be add all items of a list into list when use addAll method', () => {
		const numbers = new List<number>(1, 2, 3, 4, 5);
		const letters = new List<string>('a', 'b', 'c');
		const fruits = new List<{ fruit: string }>(
			{ fruit: 'apple' },
			{ fruit: 'banana' },
		);
		numbers.addAll([6, 7, 8, 9, 0]);
		letters.addAll(['j', 'k', 'l']);
		fruits.addAll([{ fruit: 'melon' }, { fruit: 'strawberry' }]);
		expect(numbers).toEqual(new List<number>(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
		expect(letters).toEqual(new List<string>('a', 'b', 'c', 'j', 'k', 'l'));
		expect(fruits).toEqual(
			new List<{ fruit: string }>(
				{ fruit: 'apple' },
				{ fruit: 'banana' },
				{ fruit: 'melon' },
				{ fruit: 'strawberry' },
			),
		);
	});

	it('should not include when the value is null when using addIgnoringNulls method', () => {
		const list = new List<{ req: string } | null>();
		list.addIgnoringNulls(null);
		list.addIgnoringNulls(null);
		list.addIgnoringNulls({ req: 'I pass :)' });
		expect(list).toEqual(
			new List<{ req: string } | null>({ req: 'I pass :)' }),
		);
		expect(list).not.toContain(null);
	});

	it('should not include when the values are nulls when using addManyIgnoringNulls method', () => {
		const list = new List<{ req: string } | null>();
		list.addManyIgnoringNulls([
			null,
			null,
			{ req: 'Badaboom' },
			null,
			{ req: 'I tested' },
			null,
			null,
			{ req: 'Another value :c' },
		]);
		expect(list).toEqual(
			new List<{ req: string } | null>(
				{ req: 'Badaboom' },
				{ req: 'I tested' },
				{ req: 'Another value :c' },
			),
		);
		expect(list).not.toContain(null);
	});

	it('should get TypeError when send a null in a list to checkForNullsAndAddAllTo method', () => {
		const list = new List<any>(1, 2, 3, 4, 5);
		list.checkForNullsAndAddAllTo([6, null, null, 9, 0]);
		expect(list).toThrow(TypeError);
	});

	it('should add all in list when send a non null values of a list to checkForNullsAndAddAllTo method', () => {
		const list = new List<any>(1, 2, 3, 4, 5);
		list.checkForNullsAndAddAllTo([6, 7, 8, 9, 0]);
		expect(list).toEqual(new List<any>(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
	});

	it('should return true if there are null values in a list when using hasNullValues method', () => {
		const list = new List<null | number>(
			1,
			2,
			null,
			4,
			5,
			null,
			7,
			null,
			null,
		);
		const listHasNullValue: boolean = list.hasNullValues();
		expect(listHasNullValue).toBe(true);
	});

	it('should return false if there are no null values in a list when using hasNullValues method', () => {
		const list = new List<null | number>(1, 2, 3, 4, 5, 6, 7, 8, 9);
		const listHasNullValue: boolean = list.hasNullValues();
		expect(listHasNullValue).toBe(false);
	});

	it('replace method should replace the item at the specified index', () => {
		const array = new List<number>(1, 2, 3);
		array.replace(1, 10);
		expect(array[1]).toBe(10);
	});

	it('clear method should empty the array', () => {
		const array = new List<number>(1, 2, 3);
		array.clear();
		expect(array.length).toBe(0);
	});

	it('take method should return the item at the specified index', () => {
		const array = new List<number>(1, 2, 3);
		const result = array.take(1);
		expect(result).toBe(2);
	});

	it('isEmpty method should return true for an empty array', () => {
		const array = new List<number>();
		const result = array.isEmpty();
		expect(result).toBe(true);
	});

	it('isEmpty method should return false for a non-empty array', () => {
		const array = new List<number>(1, 2, 3);
		const result = array.isEmpty();
		expect(result).toBe(false);
	});
});
