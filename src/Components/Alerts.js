import React from 'react'

export default function Alerts(props) {
    const capitalize = (word) => {
        const lower =  word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.tp} d-flex align-items-center textAlert`} role="alert" 
    // style={{position: 'fixed', top: 545, right: 15, width: 300}}
    >
        <div>
            {capitalize(props.alert.msg)} 
        </div>
    </div>
  )
}
