import React, { useState } from 'react';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Section from 'components/section/Section';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (review) => {
    switch (review) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const persantage = Math.round((100 / total) * good);
    return persantage;
  };

  const options = ["good", "neutral", "bad"];

  return (
    <>
      <Section title = 'Please leave feedback'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback = {addFeedback}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title = 'Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
        ) : (
          <Notification message = "No feedback given"/>
        )
      }
    </>
  );
};

export default App;