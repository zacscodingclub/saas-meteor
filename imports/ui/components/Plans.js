import React, { PropTypes } from 'react';
import { composerWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Plans from '../../api/plans/plans';
import centsToDollars from '../../modules/cents-to-dollars';

const PlansList = ({ plans, currentPlan }) => {
  <div className="Plans">
    {plans.map(({ planId, label, price}) => {
      const isCurrentPlan = currentPlan === planId;

      return (
        <label key={ planId } className={`Plan ${isCurrentPlan ? 'current' : ''}`}>
          <input
            type="radio"
            name="plan"
            value={ planId }
            defaultCheck={ planId === 'small' }
            disable={ isCurrentPlan }
          />
          { centsToDollars(price) } - { label }
        </label>
      );
    })}
  </div>
};

PlansList.propTypes = {
  plans:
}
