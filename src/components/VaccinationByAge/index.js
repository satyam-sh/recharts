// Write your code here
// Write your code here
import {PieChart, Pie, Legend, ResponsiveContainer, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {detail} = props

  return (
    <div className="pi-chart-container">
      <h1 className="vaccination-coverage-heading">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={detail} dataKey="count" cx="50%" cy="50%" nameKey="age">
            <Cell fill="#2d87bb" />
            <Cell fill="#a3df9f" />
            <Cell fill="#64c2a6" />
          </Pie>
          <Legend type="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByAge
