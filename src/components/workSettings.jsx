import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class WorkSettings extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Work Settings</div>
            <div className="card-body">
              <div className="form-group row">
                <label htmlFor="startDate" className="col-sm-3 col-form-label">
                  Start Date
                </label>
                <div className="col-sm-9">
                  <DatePicker
                    className="form-control"
                    id="startDate"
                    placeholderText="Start Date"
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                    todayButton="Today"
                    withPortal
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    showWeekNumbers
                    name="startDate"
                    selected={this.props.workSettings.startDate}
                    onChange={this.props.onChangeStartDate}
                  />
                  {/* <input
                    type="text"
                    className="form-control"
                    id="startDate"
                    placeholder="Start Date"
                    name="startDate"
                    defaultValue={this.props.workSettings.startDate}
                    onChange={this.props.onChangeStartDate}
                  /> */}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="workingHours"
                  className="col-sm-3 col-form-label"
                >
                  Working Hours
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="workingHours"
                    placeholder="Working Hours"
                    name="workingHours"
                    defaultValue={this.props.workSettings.workingHours}
                    onChange={this.props.onChangeWorkingHours}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
                disabled={this.props.workSettings.buttonDisabled}
                onClick={this.props.onUpdateSettings}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkSettings;
