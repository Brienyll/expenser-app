import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Coffee',
    note: '',
    amount: 450,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Macys',
    note: '',
    amount: 12400,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Breakfast',
    note: '',
    amount: 1240,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];

test('should filter my test value', () => {
  const filters = {
    text: 'a',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    endDate: moment(0).add(2, 'days'),
    startDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by Date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by Amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
