import React from 'react'
import UserProvider from '../../contexts/contextUser'
import MetricProvider from '../../contexts/contextMetric'
import NavMetric from './dashboard'
import SprintProgress from '../../components/Metric/MetricSprint/sprintProgress'
import BoardProvider from '../../contexts/contextBoard'

const MetricSprint = () => {

  return (
    <UserProvider>
      <BoardProvider>
        <MetricProvider>
          <NavMetric></NavMetric>
          <SprintProgress></SprintProgress>
        </MetricProvider>
      </BoardProvider>
    </UserProvider>
  );
}
export default MetricSprint