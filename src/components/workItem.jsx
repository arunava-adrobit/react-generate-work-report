import React, { Component } from "react";

class WorkItem extends Component {
  state = {};

  renderButtons = props => {
    const isNewRecord = props.workItem.isNewRecord;

    if (isNewRecord) {
      return (
        <div className="form-group col-2">
          <button
            onClick={() => {
              props.onAdd(props.workItem);
            }}
            className="btn btn-success"
            disabled={props.workItem.disabled}
          >
            Add
          </button>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="form-group col-2">
            <button
              onClick={() => {
                props.onEdit(props.workItem.id);
              }}
              className="btn btn-primary"
            >
              Edit
            </button>
          </div>
          <div className="form-group col-2">
            <button
              onClick={() => {
                props.onDelete(props.workItem.id);
              }}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-row">
          <div className="form-group col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Work Item"
              name="name"
              defaultValue={this.props.workItem.name}
              onChange={this.props.onChangeName.bind(this, this.props.workItem)}
            />
          </div>
          <div className="form-group col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Required Time"
              name="hour"
              defaultValue={this.props.workItem.hour}
              onChange={this.props.onChangeHour.bind(this, this.props.workItem)}
            />
          </div>
          {this.renderButtons(this.props)}
        </div>
      </React.Fragment>
    );
  }

  componentWillUnmount() {
    this.props.onCreateWorkPatterns();
  }
}

export default WorkItem;
