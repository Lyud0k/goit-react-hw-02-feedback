import css from 'components/FeedbackOptions/FeedbackOptions.module.css';  
export const FeedbackOptions = ({options, onLeaveFeedback }) => {
    return (
<ul className={css.boxUp}>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={this.clickGood }>Good</button>
      </li>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={this.clickNeutral}>Neutral</button>
      </li>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={this.clickBad}>Bed</button>
      </li>
    </ul>
    )
}
