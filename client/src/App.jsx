import { useEffect, useState } from 'react';
import './App.css';
import FormComp from './components/FormComp';

const App = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState('');

  useEffect(() => {
    const sendEmailRequest = async () => {
      const options = {
        method: 'POST',
        body: JSON.stringify({email}),
      };

      const response = await fetch("http://localhost:5000/sendEmail", options);
      
      if (!response.ok) {
        console.log('Error is response');
      }

      console.log('Request Successful');
    }

    isSubmitted && sendEmailRequest();
  }, [isSubmitted, email])

  return (
    <main>
      <FormComp input={email} setInput={setEmail} subBtnContent='Send Email' setIsSubmitted={setIsSubmitted} />
    </main>
  )
};

export default App;
