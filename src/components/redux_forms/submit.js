import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const submit = values => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!values) {
      throw new SubmissionError({
        _error: 'Submit failed!'
      });
    } else {
      console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
  });
};

export default submit;
