import React from "react";
import { Button } from 'rsuite';
import 'rsuite/styles/index.less'


export default function Button() {
  return (
    <Button color="violet" appearance="primary">
      {props.name}
    </Button>
  );
}
