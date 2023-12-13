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

	it('clone method should throw an error for non-cloneable objects', () => {
		expect(() => Objects.clone(Object.create(null))).toThrow(
			'Object not cloneable',
		);
	});
});
