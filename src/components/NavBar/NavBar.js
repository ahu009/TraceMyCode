import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

import style from './NavBar.scss';

import Search from './Search';


/**
 * UI Component
 * @type {Class}
 */
class NavBar extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  // constructor (props) {
  //   super(props);
  //   this.handleKeyPress = this.handleKeyPress.bind(this);
  //   this.state = {
  //     value: ''
  //   };
  // }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {
    return (
      <div className={style.NavBar}>
        <div className={style.tempLogo}>
          <p> TraceMyCode </p>
        </div>

        <Search />

        <Button
          bsClass={style.create}
          onClick={() => {}}>
          Create Sandbox
        </Button>
      </div>
    );
  }
}

export default NavBar;
