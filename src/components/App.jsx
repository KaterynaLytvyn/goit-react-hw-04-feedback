import {useState} from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = event => {
    const value = event.target.name;

    switch(value){
      case('good'):
        setGood(good+1);
        break;
      case('neutral'):
        setNeutral(neutral+1);
        break;
      case('bad'):
        setBad(bad+1);
        break;      
    }
  }

  function countTotalFeedback() {
    const total = good+neutral+bad;
    return total
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const positive = Math.round((good/total)*100);
    return positive? positive:0
  }

  return(
    <div>
    <Section
      title="Please leave feedback"
    >
      <FeedbackOptions 
        options={['good','neutral','bad']}
        onLeaveFeedback = {handleChange}
      />
    </Section>
    <Section title="Statistics">
   {countTotalFeedback()>0?
    <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      total = {countTotalFeedback()}
      positivePercentage = {countPositiveFeedbackPercentage()}
    />
    :
    <Notification message="There is no feedback"></Notification>
  }
</Section>
  </div>
  )
}

export default App;

