import React from 'react';
import ReactHtmlParser from 'react-html-parser'
import './css/Job.css';

const Job = props => {
    return (
        <div className="job">
            <div className="job-header">
                <div className="job-square">
                    <a href={props.site} target="_blank" rel="noopener noreferrer">                
                        <img className="job-logo" alt={props.company} src={props.logo}/>
                    </a>
                </div>
                <div className="job-details">
                    <h4 className="job-title">{props.title}</h4>
                    <h5 className="job-company">{props.company}</h5>
                    <h5 className="job-tenure">{props.tenure}</h5>
                </div>
            </div>
            <div className="job-body">
                <p>
                { ReactHtmlParser(props.description) }
                </p>
            </div>
            <hr className="job-divider"></hr>
        </div>
    );
};

export default Job;