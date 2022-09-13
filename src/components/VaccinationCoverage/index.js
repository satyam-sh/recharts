// Write your code here
// Write your code here
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {detail} = props

  const dataFormatter = num => `${num / 100}k`

  return (
    <div className="barChartContainer">
      <h1 className="vaccination-coverage-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={detail} width={1000} height={300}>
          <XAxis dataKey="vaccineDate" />
          <YAxis tickFormatter={dataFormatter} />

          <Bar name="Dose1" dataKey="dose1" fill="#5a8dee" width="25%" />
          <Bar name="Dose2" dataKey="dose2" fill="#f54394" width="25%" />
          <Legend fill="#5a8dee" iconType="rect" />
          <Legend fill="#f54394" iconType="rect" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
