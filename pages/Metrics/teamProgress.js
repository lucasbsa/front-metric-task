import React from 'react'
import UserProvider from '../../contexts/contextUser'
import MetricProvider from '../../contexts/contextMetric'
import NavMetric from './dashboard'
import TeamProgress from '../../components/Metric/MetricTeam/teamProgress'
import BoardProvider from '../../contexts/contextBoard'

const MetricTeam = () => {

  return (
    <UserProvider>
      <BoardProvider>
        <MetricProvider>
          <NavMetric></NavMetric>
          <TeamProgress></TeamProgress>
        </MetricProvider>
      </BoardProvider>
    </UserProvider>
  );
}
export default MetricTeam