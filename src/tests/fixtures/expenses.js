import moment from 'moment';

export default [
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
