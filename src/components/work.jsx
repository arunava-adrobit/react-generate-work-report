import React, { Component } from "react";
import WorkItems from "./workItems";
import WorkSettings from "./workSettings";
import WorkPatterns from "./workPatterns";
import Navbar from "./navbar";
import { addDays } from "date-fns";

class Work extends Component {
  state = {
    workItems: [
      { id: 1, name: "", hour: "", isNewRecord: true, disabled: true }
    ],
    workSettings: {
      startDate: "",
      workingHours: "",
      buttonDisabled: true
    },
    workPatterns: []
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main role="main" className="container-fluid">
          <div className="row">
            <WorkItems
              onChangeName={this.haldelChangeName}
              onChangeHour={this.haldelChangeHour}
              onAdd={this.handelAdd}
              onEdit={this.handelEdit}
              onDelete={this.handelDelete}
              onCreateWorkPatterns={this.craeteWorkPatterns}
              workItems={this.state.workItems}
            />
            <WorkSettings
              onChangeStartDate={this.haldelChangeStartDate}
              onChangeWorkingHours={this.haldelChangeWorkingHours}
              onUpdateSettings={this.handelUpdateSettings}
              workSettings={this.state.workSettings}
            />
          </div>
          <div className="row" style={{ marginTop: 10 + "px" }}>
            <WorkPatterns workPatterns={this.state.workPatterns} />
          </div>
        </main>
      </React.Fragment>
    );
  }

  haldelChangeName = (workItem, event) => {
    const name = event.target.value;
    const workItems = [...this.state.workItems];
    const index = workItems.indexOf(workItem);

    workItems[index].name = name;

    if (workItems[index].name !== "" && workItems[index].hour !== "") {
      workItems[index].disabled = false;
    } else {
      workItems[index].disabled = true;
    }

    this.setState({ workItems });

    this.craeteWorkPatterns();
  };

  haldelChangeHour = (workItem, event) => {
    const hour = event.target.value;
    const workItems = [...this.state.workItems];
    const index = workItems.indexOf(workItem);

    workItems[index].hour = hour;

    if (workItems[index].name !== "" && workItems[index].hour !== "") {
      workItems[index].disabled = false;
    } else {
      workItems[index].disabled = true;
    }

    this.setState({ workItems });

    this.craeteWorkPatterns();
  };

  handelAdd = workItem => {
    const workItems = [...this.state.workItems];
    const index = workItems.indexOf(workItem);

    workItems[index].isNewRecord = false;

    const workItemsLength = workItems.length;
    const lastElement = workItems[workItemsLength - 1];
    const newElementId = lastElement.id + 1;

    workItems.push({ id: newElementId, name: "", hour: "", isNewRecord: true });

    this.setState({ workItems });

    this.craeteWorkPatterns();
  };

  handelEdit = () => {
    this.craeteWorkPatterns();
  };

  handelDelete = workItemId => {
    const workItems = this.state.workItems.filter(workItem => {
      return workItem.id !== workItemId;
    });

    this.setState({ workItems });
  };

  haldelChangeStartDate = startDate => {
    const workSettings = this.state.workSettings;

    workSettings.startDate = startDate;

    if (workSettings.startDate !== "" && workSettings.workingHours !== "") {
      workSettings.buttonDisabled = false;
    } else {
      workSettings.buttonDisabled = true;
    }

    this.setState({ workSettings });

    this.craeteWorkPatterns();
  };

  haldelChangeWorkingHours = event => {
    const workingHours = event.target.value;
    const workSettings = this.state.workSettings;

    workSettings.workingHours = workingHours;

    if (workSettings.startDate !== "" && workSettings.workingHours !== "") {
      workSettings.buttonDisabled = false;
    } else {
      workSettings.buttonDisabled = true;
    }

    this.setState({ workSettings });

    this.craeteWorkPatterns();
  };

  handelUpdateSettings = () => {
    this.craeteWorkPatterns();
  };

  craeteWorkPatterns = () => {
    const workPatterns = [];
    const workItems = this.state.workItems.filter(workItem => {
      return !workItem.isNewRecord;
    });

    if (
      workItems.length === 0 ||
      this.state.workSettings.startDate === "" ||
      this.state.workSettings.workingHours === ""
    ) {
      this.setState({ workPatterns });
      return;
    }

    let startDate = this.state.workSettings.startDate;
    let endDate = this.state.workSettings.startDate;
    let workingHours = parseInt(this.state.workSettings.workingHours);
    let pendingWorkingHours = parseInt(this.state.workSettings.workingHours);

    workItems.map(workItem => {
      let hour = parseInt(workItem.hour);
      let flag = true;
      let incrementEndDatePointer = false;

      while (flag) {
        incrementEndDatePointer = false;
        if (pendingWorkingHours > hour) {
          pendingWorkingHours = pendingWorkingHours - hour;
          flag = false;
        } else if (pendingWorkingHours < hour) {
          hour = hour - pendingWorkingHours;
          pendingWorkingHours = workingHours;
          endDate = addDays(new Date(endDate), 1);
          flag = true;
        } else {
          pendingWorkingHours = workingHours;
          flag = false;
          incrementEndDatePointer = true;
        }
      }

      workPatterns.push({
        workItem: workItem.name,
        startDate:
          startDate.getDate() +
          "-" +
          (startDate.getMonth() + 1) +
          "-" +
          startDate.getFullYear(),
        endDate:
          endDate.getDate() +
          "-" +
          (endDate.getMonth() + 1) +
          "-" +
          endDate.getFullYear()
      });

      if (incrementEndDatePointer) {
        endDate = addDays(new Date(endDate), 1);
      }

      startDate = endDate;

      return true;
    });

    this.setState({ workPatterns });
  };

  componentDidMount() {
    document.body.classList.remove("signin-page");
  }
}

export default Work;
