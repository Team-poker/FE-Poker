import { propNames } from "@chakra-ui/styled-system";
import React from "react";

interface IssueItemProps {
  title?: string;
  priority?: string;
}

const IssueItem = ({ title, priority }: IssueItemProps) => {
  return <li className="issue-item">{title}</li>;
};

export default IssueItem;
