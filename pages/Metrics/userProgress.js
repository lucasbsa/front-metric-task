import React from 'react'
import Progress from '../../components/Metric/progressUser'
import UserProvider from '../../contexts/contextUser'
import MetricProvider from '../../contexts/contextMetric'
import NavMetric from './dashboard'

const Metric = () => {

  return (
      <UserProvider>
        <MetricProvider>
          <NavMetric></NavMetric>
          <Progress></Progress>
        </MetricProvider>
      </UserProvider>
  );
}
export default Metric