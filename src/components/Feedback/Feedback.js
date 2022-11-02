import React from 'react';
import css from 'components/Feedback/Feedback.module.css';
import { Statistics } from './../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Notification } from 'components/Notification/Notification';


export class Feedback extends React.Component{
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //     other: 10,
  //   }
  // }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  }
  // clickGood = (evt) => {
  //   const target = evt.target;
  //   console.log(':-)');
  //   console.log(this);
  //   console.log(target);
  // }
  // clickGood = () => {
  //   this.setState({
  //     fine: 99,
  //   })
  // }
  clickGood = () => {
    this.setState({ visible: true });
    this.setState((goodUp) => {
      console.log(goodUp);
      return {
        good:goodUp.good + 1,
      }
    });
  }
  clickNeutral = () => {
    this.setState({ visible: true });
    this.setState((neutralUp) => {
      return {
neutral:neutralUp.neutral + 1,
      }
 })
  }
  clickBad = () => {
    this.setState({ visible: true });
    this.setState((badUp) => {
      return {
bad:badUp.bad + 1,
      }
})
  }
  countTotalFeedback = () => {
    const pl = this.state.good + this.state.neutral + this.state.bad;
    return pl;
  }
  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(this.state.good === 0 ? 0 : this.state.good * 100 / this.countTotalFeedback());
  }
  no = () => {
    this.setState({ visible: false });
  }
  yes = () => {
    this.setState({ visible: true });
}
  render() {
    return (
      <div className={css.boxAll}>

        <div className={css.box}>
        <SectionTitle title='Please leave feedback'>
       
        <FeedbackOptions 
        options = {[
            this.clickGood,
        this.clickNeutral,
        this.clickBad,
        ]}
        onLeaveFeedback = {[
        'good', 'neutral', 'bad'
        ]}
        ></FeedbackOptions>
          </SectionTitle>
          </div>
    {/* <ul className={css.boxUp}>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={this.clickGood }>Good</button>
      </li>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={this.clickNeutral}>Neutral</button>
      </li>
      <li className={css.list}>
            <button className={css.click} type='button' onClick={this.clickBad}>Bed</button>
      </li>
    </ul> */}
        {this.countTotalFeedback() === 0 ? (<Notification message = 'There is no feedback' />) : 
                <div className={css.boxDown}>
        <SectionTitle title='Statistic'>
        
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              
        />
            </SectionTitle>
            
          </div>}
      
        {/* {this.state.visible && (

          )} */}
  </div>
    );
  }
}

    //     {/* <ul>
          
    //       <li className={css.listOc}><img className={css.picture} alt = 'smile' src={smile} width = '30' height= '30'/><p>Good: {this.state.good}</p></li>
    //       <li className={css.listOc}><img className={css.picture} alt = 'no smile' src={so} width = '30' height= '30'/><p>Neutral: {this.state.neutral}</p></li>
    //       <li className={css.listOc}><img className={css.picture} alt = 'sad' src={bad} width = '30' height= '30'/><p>Bed: {this.state.bad}</p></li>
    //       {/* <li className={css.listOc}><p>Positive feedback: {this.state.good === 0 ? 0 : Number.parseInt(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)) }%</p></li> */}
    //       <li className={css.listOc}><p>Total: {this.countTotalFeedback()} </p></li>
    //       <li className={css.listOc}><p>Positive feedback: {this.countPositiveFeedbackPercentage()}% </p></li>
    // </ul> */}


// export const Feedback = () => {
//   return(
 
//   <div>
//     <h1>Please leave feedback</h1>
//     <ul>
//       <li>
//         <button>Good</button>
//       </li>
//       <li>
//         <button>Neutral</button>
//       </li>
//       <li>
//         <button>Bed</button>
//       </li>
//     </ul>
//     <h2>Statistic</h2>
//     <ul>
//       <li>Good:</li>
//       <li>Neutral:</li>
//       <li>Bed:</li>
//     </ul>
//   </div>
  
// )
//   } ;

