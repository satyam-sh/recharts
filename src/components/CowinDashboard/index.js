// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage/index'
import VaccinationByGender from '../VaccinationByGender/index'
import VaccinationByAge from '../VaccinationByAge/index'
import './index.css'

const apiConstants = {
  success: 'S',
  failure: 'F',
  loading: 'L',
  initial: 'I',
}

class CowinDashboard extends Component {
  state = {
    lastSevenDays: [],
    apiStatus: apiConstants.initial,
    byGender: [],
    byAge: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const options = {
      method: 'GET',
    }
    const response = await fetch(vaccinationDataApiUrl, options)

    if (response.ok) {
      const jsonData = await response.json()
      console.log(jsonData)
      const lastSevenDaysDetails = jsonData.last_7_days_vaccination
      const vaccinationByGender = jsonData.vaccination_by_gender
      const vaccinationByAge = jsonData.vaccination_by_age

      this.convertDetails(
        lastSevenDaysDetails,
        vaccinationByGender,
        vaccinationByAge,
      )
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  convertDetails = (arr1, arr2, arr3) => {
    const updatedSevenDaysDetails = arr1.map(each => ({
      vaccineDate: each.vaccine_date,
      dose1: each.dose_1,
      dose2: each.dose_2,
    }))

    this.setState({
      lastSevenDays: updatedSevenDaysDetails,
      byGender: arr2,
      byAge: arr3,
      apiStatus: apiConstants.success,
    })
  }

  renderSuccessView = () => {
    const {lastSevenDays, byGender, byAge} = this.state

    return (
      <>
        <VaccinationCoverage detail={lastSevenDays} />
        <VaccinationByGender detail={byGender} />
        <VaccinationByAge detail={byAge} />
      </>
    )
  }

  FailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="wrong-heading">Something Went Wrong</h1>
    </div>
  )

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return (
          <div className="loader" testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        )
      case apiConstants.success:
        return this.renderSuccessView()

      case apiConstants.failure:
        return this.FailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="logo-heading">Co-Win</h1>
        </nav>
        <h1 className="page-header">CoWin Vaccination in India</h1>
        {this.renderViews()}
      </div>
    )
  }
}
export default CowinDashboard
