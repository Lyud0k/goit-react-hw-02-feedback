import css from 'components/Statistics/Statistics.module.css';
import smile from './picture/smile.jpg';
import so from './picture/so.jpg';
import sad from './picture/bad.jpg';

export const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return (
    <ul>
          <li className={css.listOc}><img className={css.picture} alt = 'smile' src={smile} width = '30' height= '30'/><p>Good: {good}</p></li>
          <li className={css.listOc}><img className={css.picture} alt = 'no smile' src={so} width = '30' height= '30'/><p>Neutral: {neutral}</p></li>
          <li className={css.listOc}><img className={css.picture} alt = 'sad' src={sad} width = '30' height= '30'/><p>Bed: {bad}</p></li>
          {/* <li className={css.listOc}><p>Positive feedback: {this.state.good === 0 ? 0 : Number.parseInt(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)) }%</p></li> */}
          <li className={css.listOc}><p>Total: {total} </p></li>
          <li className={css.listOc}><p>Positive feedback: {positivePercentage}% </p></li>
    </ul>
   ) 
}