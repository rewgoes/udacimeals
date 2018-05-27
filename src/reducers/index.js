import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

function calendar(state = initialCalendarState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE:
      return {
        //spread operator 
        ...state,
        /**
         * Values after the comma ',' modifies the spread operator
         * 
         * Use [day] instead of day, because by using only day, it will add a property day 
         * to the result. However, we want to add/update the property with value equal to
         * the value inside the variable day. Ex: add/update sunday
         */
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      }
    default:
      return state
  }
}

export default calendar