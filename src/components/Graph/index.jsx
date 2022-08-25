import React from 'react'
import { Progress } from "rsuite";

export const Graph = () => {
  return (
    <div style={{ width: 120, marginTop: 10 }}>
    <Progress.Circle percent={percent} />
  </div>
  )
};