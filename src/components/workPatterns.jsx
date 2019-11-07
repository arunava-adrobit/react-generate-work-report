import React, { Component } from "react";

class WorkPatterns extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Work Patterns</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Work Item</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.workPatterns.map((workPattern, key) => (
                    <tr key={key}>
                      <td>{workPattern.workItem}</td>
                      <td>{workPattern.startDate}</td>
                      <td>{workPattern.endDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkPatterns;
