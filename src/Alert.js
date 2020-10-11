import { render } from '@testing-library/react';
import React , {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


class AlertEx extends React.Component {
   
    
  render() {   
      return(  
    <AlertDismissibleExample/>
      );
  }
}
  function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>If you are interested in these products ,please contact so and so</Alert.Heading>
          <p>
            Contact details..............................
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }


  export default AlertEx;