import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: 'asdiohjkcand',
      description: 'January Rent',
      note: 'First Month Rent - paid',
      amount: 54900,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};
