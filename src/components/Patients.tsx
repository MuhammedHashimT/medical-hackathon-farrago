import React from 'react'

const Patients = () => {

    const [patients, setPatients] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch("/api/profiles")
        .then(response => response.json())
        .then(data => {
            setPatients(data)
            setLoading(false)
        })
    }, [])
  return (
    <div>
        <p>All Patients</p>


    </div>
  )
}

export default Patients