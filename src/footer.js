import React from 'react'

class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                {"Copyright @" +  new Date().getFullYear() + " - Ana Sanchez Sanchez & Safa Bayraktar"}
            </div>
        )
    }
}

export default Footer