import icon2 from "../../assets/images/c-8.png"
import { Link } from "react-router-dom";
import { FaLocationDot ,FaBriefcase } from "react-icons/fa6";
import {FaArrowRight,FaHeart } from "react-icons/fa";
const Jobs=[
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	},
	{
		title: "Fresher UI/UX Designer (3 Year Exp.)",
    	location: "Kuniyamathur, Coimbatore",
    	employmentType: "Full Time",
    	imgSrc: icon2,
	}
]
function ViewPremiumJobs() {
    return ( <>
        <a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                      <i class="fas fa-bars me-2"></i>Dashboard Navigation
                  </a>
                       <div class="collapse" id="MobNav">
                          <div class="dashboard-nav">
                              <div class="dashboard-inner">
                          
                              <ul data-submenu-title="Main Navigation">
                                   <li><a href="candidate-dashboard.html">Dashboard</a></li>
                                   <li><Link to="/BookMarkedResume">BookMarked Resumes</Link></li>
                                   <li><Link to="/JobApplicants">Job Applicants</Link></li>
                               </ul>
                               <ul data-submenu-title="Jobs Section">
                                   <li class="inactive"><a href="candidate-dashboard.html">Add Jobs</a></li>
                                   <li><a href="dashboard-manage-resume.html">View Jobs</a></li>
                                   <li ><a href="dashboard-add-resume.html">Edit Jobs</a></li>
                                   <li  class="active"><a href="dashboard-manage-resume.html">View Premium Jobs</a></li>
                                   <li><a href="dashboard-manage-resume.html">View Free Jobs</a></li>
                                   
                               </ul>
                               <ul data-submenu-title="My Accounts">
                                   <li><a href="dashboard-my-profile.html">My Profile </a></li>
                                   <li><a href="dashboard-change-password.html">Change Password</a></li>
                                   <li><a href="javascript:void(0);">Delete Account</a></li>
                                   <li><a href="login.html">Log Out</a></li>
                               </ul>
                              </div>					
                          </div>
                      </div>  
          <div class="dashboard-content">
                          <div class="dashboard-tlbar d-block mb-5">
                              <div class="row">
                                  <div class="colxl-12 col-lg-12 col-md-12">
                                      <h1 class="ft-medium">Premium Jobs Added By You</h1>
                                      <nav aria-label="breadcrumb">
                                          <ol class="breadcrumb">
                                              <li class="breadcrumb-item text-muted"><a href="#">wrHome</a></li>
                                              <li class="breadcrumb-item text-muted"><a href="#">Dashboard</a></li>
                                              <li class="breadcrumb-item"><a href="#" class="theme-cl">Jobs Added</a></li>
                                          </ol>
                                      </nav>
                                  </div>
                              </div>
                          </div>
                          
                          <div class="dashboard-widg-bar d-block">
                              <div class="row">
                                  <div class="col-xl-12 col-lg-12 col-md-12">
                                  
                                      <div class="px-3 py-2 br-bottom br-top bg-white rounded mb-3">
                                          <div class="flixors">
                                              <div class="row align-items-center justify-content-between">
                                                  <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
                                                      <h6 class="mb-0 ft-medium fs-sm">6 Jobs Added</h6>
                                                  </div>
                                                  
                                                  <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                                                      <div class="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
                                                          <div class="single_fitres me-2">
                                                              <select class="form-select simple">
                                                                <option value="1" selected="">Default Sorting</option>
                                                                <option value="2">Sort By Name</option>
                                                                <option value="3">Sort By Rating</option>
                                                                <option value="4">Sort By Trending</option>
                                                                <option value="5">Sort By Recent</option>
                                                              </select>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                          </div>
                                      </div>
                                      
                                      <div class="data-responsive">
                                          
                                      <div className="row align-items-center g-xl-4 g-lg-3 g-md-3 g-3">
               {Jobs.map((job, index) => (
                 <div key={index} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                   <div className="jbr-wrap text-left border rounded">
                     <div className="cats-box mlb-res rounded bg-white d-flex align-items-center justify-content-between px-3 py-3">
                       <div className="cats-box rounded bg-white d-flex align-items-center">
                         <div className="text-center"><img src={job.imgSrc} className="img-fluid" width="55" alt="" /></div>
                         <div className="cats-box-caption px-2">
                           <h4 className="fs-md mb-0 ft-medium">{job.title}</h4>
                           <div className="d-block mb-2 position-relative">
                             <span className="text-muted medium">
                               &nbsp;<FaLocationDot />&nbsp;{job.location}
                             </span>
                             <span className="muted medium ms-2 theme-cl">
                               &nbsp;<FaBriefcase />&nbsp;{job.employmentType}
                             </span>
                           </div>
                         </div>
                       </div>
                       <div className="text-center mlb-last">
                         <a href="job-detail.html" className="btn gray ft-medium apply-btn fs-sm rounded">Apply Job
                           &nbsp;<FaArrowRight />
                           &nbsp;
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
                                      </div>
                                  </div>
                              </div>	
                          </div>
                      </div>
                      
             
       </> );
}

export default ViewPremiumJobs;