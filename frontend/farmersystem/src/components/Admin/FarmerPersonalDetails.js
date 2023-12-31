import { useState, useEffect  } from "react";
import { useParams,useHistory } from "react-router-dom";
import axios from 'axios';

function FarmerPersonalDetails(props) {
    const [personalInfo, setPersonalInfo] = useState([])
    const history = useHistory();
    const { username } = useParams();
    const url = "http://localhost:9099/farmer/profile/" + username;
    useEffect(() => {
        axios
            .get(url, {})
            .then((response) => {

                console.log(response.data);
                setPersonalInfo(response.data);

            })
            .catch((error) => {
                console.log(error.response);
            });


    }, []);

    function handleFarmer(){
        
            const removeurl = "http://localhost:9099/farmer/remove/" + username;
            axios
                .get(removeurl, {})
                .then((response) => {
    
                    console.log(response.data);
                    if(response.data === "updated")
                    {
                       
                        window.location = `/admin-welcome/${ sessionStorage.getItem("authenticatedUser")}`;
                        alert("Removed Successfully");
                    }
                    
                })
                .catch((error) => {
                    console.log(error.response);
                });
    
    
        
        
    }
    return (
        <div class="container my-4 ">

            <hr />

            <div class="row">




                <div class="col-lg-12 col-md-6 mb-4">

                    <div class="card bg-secondary">
                        <div class="card-header">
                            <center> <b> Personal Info </b> </center>
                        </div>

                        <div className='row '>
                            <div className='col-12'>
                                <div className='container-fluid d-flex justify-content-evenly '>

                                    <div className='row col-3'>
                                        <div class="card " style={{ width: "12rem", height: "40vh", marginTop: "10vh", marginBottom: "10vh", backgroundColor: "black", color: "white" }}>

                                            <center><img src="https://cdn-icons.flaticon.com/png/512/522/premium/522267.png?token=exp=1649750381~hmac=64494e535aefc21edbb896166a94e5b8" class="card-img-top" alt="..." style={{ width: "100px", height: "100px", marginTop: "5vh" }} /></center>
                                            <div class="card-body">
                                                <center><b><h5 class="card-title">{personalInfo.firstname}</h5></b></center>
                                                <center><p class="card-text">Farmer</p></center>
                                                <center><a href="#" class="btn btn-primary" style={{ marginTop: "vh" }}>Info</a></center>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <center>

                                    <div class="card-body d-flex justify-content-center col-8">
                                        <h5 class="card-title"></h5>
                                        <div class="card-text col-12">
                                            <div class="col-md-12">
                                                <div class="card mb-3">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <h6 class="mb-0 mt-3">First Name :</h6>
                                                            </div>
                                                            <div class="col-sm-3 mt-3 text-secondary">
                                                                {personalInfo.firstname}
                                                            </div>



                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <h6 class="mb-0 mt-3">Last Name :</h6>
                                                            </div>
                                                            <div class="col-sm-3 mt-3 text-secondary">
                                                                {personalInfo.lastname}
                                                            </div>



                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <h6 class="mb-0 mt-3">Contact No: :</h6>
                                                            </div>
                                                            <div class="col-sm-3 mt-3 text-secondary">
                                                                {personalInfo.contact}
                                                            </div>


                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <h6 class="mb-0 mt-3">Email :</h6>
                                                            </div>
                                                            <div class="col-sm-3 mt-3 text-secondary">
                                                                {personalInfo.email}
                                                            </div>

                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <h6 class="mb-0 mt-3">Address :</h6>
                                                            </div>
                                                            <div class="col-sm-3 mt-3 text-secondary">
                                                                {personalInfo.address}
                                                            </div>



                                                        </div>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-sm-3">
                                                                <h6 class="mb-0 mt-3">User Name :</h6>
                                                            </div>
                                                            <div class="col-sm-3 mt-3 text-secondary">
                                                                {personalInfo.user_name}
                                                            </div>
                                                      

                                                        </div>
                                                        <hr />
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <center className="d-flex justify-content-evenly">
                                                <button type="button" class="btn btn-success" onClick={handleFarmer}>Suspend Farmer</button>
                                                <button type="button" class="btn btn-danger" onClick={history.goBack}>Back</button>
                                            </center>


                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FarmerPersonalDetails;