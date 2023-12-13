import { describe, expect, it } from 'vitest';
import { Objects } from '../../../../modules/Objects';

describe('Objects class tests', () => {
	it('nonNull method should return true for non-null values', () => {
		expect(Objects.nonNull('value')).toBe(true);
		expect(Objects.nonNull(42)).toBe(true);
	});

	it('nonNull method should return false for null or undefined values', () => {
		expect(Objects.nonNull(null)).toBe(false);
		expect(Objects.nonNull(undefined)).toBe(false);
	});

	it('isNull method should return true for null or undefined values', () => {
		expect(Objects.isNull(null)).toBe(true);
		expect(Objects.isNull(undefined)).toBe(true);
	});

	it('isNull method should return false for non-null values', () => {
		expect(Objects.isNull('value')).toBe(false);
		expect(Objects.isNull(42)).toBe(false);
	});

	it('requireNonNull method should return true for non-null stuff', () => {
		expect(Objects.requireNonNull(`I'm not null >:(`)).toBe(true);
		expect(Objects.requireNonNull(`I'm not undefined >:(`)).toBe(true);
	});

	it('requireNonNull method should throw an error when pass null or undefined values', () => {
		expect(Objects.requireNonNull(null)).toThrow(TypeError);
		expect(Objects.requireNonNull(undefined)).toThrow(TypeError);
	});

	it('equals should return true for equal values or non-null and equal values', () => {
		const value1 = 'some value';
		const value2 = 'some value';

		expect(Objects.equals(value1, value2)).toBe(true);
	});

	it('equals should return false for non-equal values and null or undefined values', () => {
		const value1 = 'some value';
		const value2 = 'another value';

		expect(Objects.equals(value1, value2)).toBe(false);
		expect(Objects.equals(value1, null)).toBe(false);
		expect(Objects.equals(value1, undefined)).toBe(false);
	});

	it('strictEquals should return true for strictly equal non-null values', () => {
		const value1 = 'some value';
		const value2 = new String('some value');
		expect(Objects.strictEquals(value1, value2)).toBe(true);
	});

	it('strictEquals should return false for non-strictly equal values or null or undefined values', () => {
		const value1 = 'some value';
		expect(Objects.strictEquals(value1, null)).toBe(false);
		expect(Objects.strictEquals(value1, undefined)).toBe(false);
	});

	it('clone method should throw an error for non-cloneable objects', () => {
		expect(() => Objects.clone(Object.create(null))).toThrow(
			'Object not cloneable',
		);
	});
});
