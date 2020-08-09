import React from 'react'

const ApplicantInterviewSummary = () =>{
    return(
        <div class="job-cards">
            <div class="alert alert-primary" role="alert">
                Interview Summary
            </div>
            <div class="card">
                <div class="card-header">
                    <span>Football Soccer</span>
                    <span className="back-arrow"><i class="fas fa-arrow-right"></i></span>
                </div>
                
                <div class="card-body">
                    <div class="card-text interview-summary">
                        <table class="table">
                            <tbody>
                                <tr>
                                <td>Job Description</td>
                                    <td>
                                        here we set all the description of the job the he applied for and want to see summary about it
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>Reviewing</td>
                                </tr>
                                <tr>
                                    <td>Feedback &amp; Recommendation</td>
                                    <td>----</td>
                                </tr>
                                <tr>
                                    <td><small>Done at</small></td>
                                    <td><small>2020-08-07 00:14:19</small></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantInterviewSummary