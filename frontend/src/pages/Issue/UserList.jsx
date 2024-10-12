import React, { Fragment } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { assignedUserToIssue } from "@/redux/Issue/Issue.action";

const UserList = (issueDetails) => {
  const dispatch = useDispatch();
  const { project, auth, issue } = useSelector((store) => store);

  const handleIssueAssigne = (userId) => {
    console.log(issueDetails);
    console.log(issueDetails.issueDetails.id);
    dispatch(
      assignedUserToIssue({
        userId,
        issueId: issueDetails.issueDetails.id,
      })
    );
  };

  return (
    <Fragment>
      {!issue.loading ? (
        <div className="space-y-2">
          <div className="border rounded-md">
            <p className="py-2 px-3">
              {issueDetails.assignee?.fullName || "Unassigned"}
            </p>
          </div>

          {project.projectDetails?.team.map((item) => (
            <div
              onClick={() => handleIssueAssigne(item.id)}
              key={item}
              className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
            >
              <Avatar>
                <AvatarFallback className="group-hover:bg-gray-400">
                  {item.fullName[0]}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {item.fullName}
                </p>
                <p className="text-xs text-muted-foreground">
                  @{item.fullName?.toLowerCase().split(" ").join("_")}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default UserList;
