import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import style from './Modals.scss';

/**
 * UI Component
 * @type {Class}
 */
class Modals extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  // constructor (props) {
  //   super(props);
  //   this.state = { clicked: true };
  //   this.toggle = this.toggle.bind(this);
  // }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div>
        <div className={style.modal}></div>
        <Modal.Dialog style={{display: 'flex', alignItems: 'center'}} onClick={() => console.log("outside")}>
         <Modal.Body style={{backgroundColor: 'ghostwhite', borderRadius: '5px', width: '490px'}} onClick={() => console.log("inside")}>
         <Form inline>
           <FormGroup>
             <ControlLabel style={{paddingRight: '15px', fontWeight: 500}}>Sandbox Name</ControlLabel>
             <FormControl style={{backgroundColor: 'ghostwhite'}} type="text" placeholder="Jane Doe" />
             <Button style={{right: '15px', position: 'absolute'}} bsClass={style.create}>Create</Button>
           </FormGroup>
          </Form>
         </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state || {},
}) 
 
export default connect(mapStateToProps, null)(Modals)
