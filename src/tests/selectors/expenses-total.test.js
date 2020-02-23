import seleectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = seleectExpensesTotal([]);
  expect(res).toBe(0);
});

test('shopuld correctly add a single expense', () => {
  const res = seleectExpensesTotal([expenses[0]]);
  expect(res).toBe(450);
});

test('shopuld correctly add up multiple expense', () => {
  const res = seleectExpensesTotal(expenses);
  expect(res).toBe(14090);
});
