import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions'

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleShootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
      this.setState({formVisibleOnPage: true});
    }

  render(){
    let currentVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentVisibleContent = <NewTicketForm />;
    } else {
      currentVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    );
  }
}

export default NewTicketControl;
