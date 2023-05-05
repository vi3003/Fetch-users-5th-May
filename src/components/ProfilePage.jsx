import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import { fetchUser } from "../redux/Actions"
const ProfilePage=()=>{
    const dispatch=useDispatch();
    const params=useParams();
    const id=params.id;
    const loading=useSelector(state=>state.user.loading);
    const userData=useSelector(state=>state.user.userData);
    const error=useSelector(state=>state.user.error);

    useEffect(()=>{
          dispatch(fetchUser(id));
    },[])
    if (loading) {
        return (
            <div className="loader">
                <p className="custom-loader">Loading...</p>
            </div>
        )
    }
    if(error) return (<h1>{error}</h1>)
    return (<div className="box">
        <div className="name-img">
        <h1>
            {userData?.firstName} {userData.lastName}
        </h1>
        <img src={userData.image} alt="" />
    </div>
    <p className="card">
        <span className="key">Email:</span>{" "}
        <span className="value">{userData.email}</span>
    </p>
    <p className="card">
        <span className="key">Phone:</span>{" "}
        <span className="value">{userData.phone}</span>
    </p>
    <p className="card">
        <span className="key">Username:</span>{" "}
        <span className="value">{userData.username}</span>
    </p>
    <p className="card">
        <span className="key">Birthday:</span>{" "}
        <span className="value">{userData.birthDate}</span>
    </p>
    <p className="card">
        <span className="key">Gender:</span>{" "}
        <span className="value">{userData.gender}</span>
    </p>
    <p className="card">
        <span className="key">Address:</span>{" "}
        <span className="value">
            {userData.address.address}, {userData.address.city},{" "}
            {userData.address.state} {userData.address.postalCode}
        </span>
    </p>
    <p className="card">
        <span className="key">University:</span>{" "}
        <span className="value">{userData.university}</span>
    </p>
    <p className="card">
        <span className="key">Company:</span>{" "}
        <span className="value">{userData.company.name}</span>
    </p>
    <p className="card">
        <span className="key">Job Title:</span>{" "}
        <span className="value">{userData.company.title}</span>
    </p>
    <p className="card">
        <span className="key">Department:</span>{" "}
        <span className="value">{userData.company.department}</span>
    </p>
    <p className="card">
        <span className="key">Height:</span>{" "}
        <span className="value">{userData.height}cm</span>
    </p>
    <p className="card">
        <span className="key">Weight:</span>{" "}
        <span className="value">{userData.weight}kg</span>
    </p>
    <p className="card">
        <span className="key">Eye Color:</span>{" "}
        <span className="value">{userData.eyeColor}</span>
    </p>
    <p className="card">
        <span className="key">Hair Color:</span>{" "}
        <span className="value">{userData.hair.color}</span>
    </p>
    <p className="card">
        <span className="key">Hair Type:</span>{" "}
        <span className="value">{userData.hair.type}</span>
    </p>
    <p className="card">
        <span className="key">Blood Group:</span>{" "}
        <span className="value">{userData.bloodGroup}</span>
    </p>
</div>)
}

export default ProfilePage