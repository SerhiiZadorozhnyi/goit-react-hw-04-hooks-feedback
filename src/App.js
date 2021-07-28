import React, {Component} from 'react';
// import FeedbackOptions from 'components/feedback/feedback';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Section from 'components/section/Section';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';


class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };

  handleClick = e => {
    const name = e.target.name;
    this.setState(state => ({
      ...state,
      [name]: this.state[name] + 1
    }));
  };

  countTotalFeedback = () => 
    this.state.good+this.state.neutral+this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.state.good
      ? Math.round((this.state.good/this.countTotalFeedback())*100)
      : 0;

  render () {
    const {good, neutral, bad} = this.state;
    return (
      <>
        <Section title = 'Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback = {this.handleClick}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title = 'Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
          ) : (
            <Notification message = "No feedback given"/>
          )
        }
      </>
    );
  }
};

export default App;
