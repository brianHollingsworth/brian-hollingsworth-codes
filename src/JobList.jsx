import React, { Component } from 'react'
import Job from './Job';
import JobsData from './js/Jobs.json'

class JobList extends Component {
    render () {
        return (
            <div>
                {JobsData.map((jobDetail)=>{
                    return <Job key={jobDetail.key} title={jobDetail.Title} company={jobDetail.Company} tenure={jobDetail.Tenure} description={jobDetail.Description} logo={jobDetail.Logo} site={jobDetail.Site}/>
                })}
            </div>
        )
    }
}

export default JobList