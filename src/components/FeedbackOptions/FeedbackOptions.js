import css from 'components/FeedbackOptions/FeedbackOptions.module.css';  
export const FeedbackOptions = ({options, onLeaveFeedback }) => {
    return (
<ul className={css.boxUp}>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={options[0] }>{onLeaveFeedback[0]}</button>
      </li>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={options[1] }>{onLeaveFeedback[1]}</button>
      </li>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={options[2] }>{onLeaveFeedback[2]}</button>
      </li> 
    </ul>
    )
}
