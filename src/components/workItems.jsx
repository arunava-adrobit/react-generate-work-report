import React, { Component } from "react";
import WorkItem from "./workItem";

class WorkItems extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Work Items</div>
            <div className="card-body">
              {this.props.workItems.map(workItem => (
                <WorkItem
                  key={workItem.id}
                  onChangeName={this.props.onChangeName}
                  onChangeHour={this.props.onChangeHour}
                  onAdd={this.props.onAdd}
                  onEdit={this.props.onEdit}
                  onDelete={this.props.onDelete}
                  onCreateWorkPatterns={this.props.onCreateWorkPatterns}
                  workItem={workItem}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkItems;
