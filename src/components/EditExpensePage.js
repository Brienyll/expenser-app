import React from 'react';

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      Editing Expense Page fsdfsdfsdf with id of {props.match.params.id}
    </div>
  );
};
export default EditExpensePage;
