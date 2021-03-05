import React from 'react';

export class TodoForm extends React.Component {
  static defaultProps = {
    onDoneText: 'Save',
  };

  constructor(props) {
    super(props);

    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.clickSaveButtonHandler = this.clickSaveButtonHandler.bind(this);

    this.state = {
      text: props.item ? props.item.text : '',
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.changeInputHandler}
        />

        <button onClick={this.clickSaveButtonHandler}>
          {this.props.onDoneText}
        </button>
      </div>
    );
  }

  changeInputHandler(event) {
    this.setState({
      text: event.target.value,
    });
  }

  clickSaveButtonHandler() {
    const itemData = {
      text: this.state.text,
    };

    this.props.onDone(itemData);
  }
}
