// Write your code here
// Write your code here
import {PieChart, Cell, Pie, ResponsiveContainer, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {detail} = props

  return (
    <div className="pi-chart-container">
      <h1 className="vaccination-coverage-heading">Vaccination by Gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={detail}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            dataKey="count"
            nameKey="gender"
            innerRadius={50}
            outerRadius={85}
          >
            <Cell fill="#f54394" />
            <Cell fill=" #5a8dee" />

            <Cell fill=" #2cc6c6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByGender
