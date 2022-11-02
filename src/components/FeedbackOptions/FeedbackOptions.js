import css from 'components/FeedbackOptions/FeedbackOptions.module.css'; 
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback }, index) =>  (
          <ul className={css.boxUp}>
            {options.map(option => (
                  <li className={css.list}>
            <button className={css.click} type='button' key={index} onClick={() => onLeaveFeedback(option)}>{option}</button>
                  </li>))}
      {/* <li className={css.list}>
            <button className={css.click} type='button' onClick={() => onLeaveFeedback(options[0])}>{options[0]}</button>
      </li> */}
      {/* <li className={css.list}>
            <button className={css.click} type='button' onClick={options }>{onLeaveFeedback}</button>
      </li>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={options }>{onLeaveFeedback}</button>
      </li>  */}
    </ul>
    )


FeedbackOptions.protoType = {
      options:  PropTypes.func,
onLeaveFeedback: PropTypes.string,
}
