import React, {useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
 
declare const window: any;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Prepare', 'Confirm', 'Send'];
}

function getStepContent(stepIndex: any) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1: 
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex'; 
  }
}

export default function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  
  const handleNext = () => { 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = () => {
    setActiveStep(0);
  };   


  return (
    <div className='main_page'>
    <Container>
      <Row className="justify-content-md-center"> 
        <Col className="mt-5">LOGO</Col> 
        <Col className="justify-content-md-center mt-5">
          <Button className="float-right" variant="contained" color="primary">Connect</Button>
          
        </Col>
      </Row>
      
      <Row  className="justify-content-md-center"> 
        <Col className="mt-2 mb-2 text-center main_page_heading">Welcome To Our Website</Col> 
      </Row>
 
      <Row>
        <Col> 
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {/* <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>All steps completed</Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div> 
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </Col>  
      </Row>

{
  activeStep === 0
  ?
  <div className="row step_one">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-10">
              <div className="form-group">
                <label>Token address</label>
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label>Decimals</label>
                <input type="text" className="form-control"/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Comment <span>Upload File</span></label>
            <textarea className="form-control" />
          </div>
          
          <button  onClick={handleNext} className="MuiButtonBase-root MuiButton-root MuiButton-contained float-right MuiButton-containedPrimary" type="button"><span className="MuiButton-label">Next Step</span></button>
        </div>
      </div>
      :
      activeStep === 1
      ?
      <div className="row step_two">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <label>List of Recipients</label>
          <div className="recipent_list">
            <table className="table">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0x7Ad48EB59E7378405c71aCA6CA8AcF7a45f050d5</td>
                  <td>95 ANO</td>
                  <td><span>Remove</span></td>
                </tr>
                <tr>
                  <td>0x7Ad48EB59E7378405c71aCA6CA8AcF7a45f050d5</td>
                  <td>95 ANO</td>
                  <td><span>Remove</span></td>
                </tr>
                <tr>
                  <td>0x7Ad48EB59E7378405c71aCA6CA8AcF7a45f050d5</td>
                  <td>95 ANO</td>
                  <td><span>Remove</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="address_total">
            <label>Summary</label>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h3>325</h3>
                  <h6>Total number of addresses</h6>
                </div>
                <div className="col-md-6">
                  <h3>325</h3>
                  <h6>Total number of adtokens to be sent</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h3>325</h3>
                  <h6>Total number of transaction needed</h6>
                </div>
                <div className="col-md-6">
                  <h3>325</h3>
                  <h6>Your token balance</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h3>325</h3>
                  <h6>Approximate cost of operation</h6>
                </div>
                <div className="col-md-6">                  
                  <h3>325</h3>
                  <h6>Your BNB balance</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-left">
              <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" type="button">Previous Step</button>
            </div>
            <div className="col-md-6 text-right">
              <button onClick={handleNext} className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary" type="button">Next Step</button>
            </div>
          </div>
          
        </div>
      </div>
      :
      null
}
      

    </Container>
    </div>
  );
}
