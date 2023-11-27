import React from "react";
import { useParams } from "react-router-dom";
import ProfileTabs from '../components/Tabs/ProfileTabs';
import '../assets/styles/pages/Profile.css';
import '../APIcalls'

// only look at profile, watchlist, and lists
const Profile = (id) => {
    const { currentTab } = useParams();
    // console.log("Profile: " + currentTab);
    //get authtoken
    //check if ur logged in
    //if yes
    //check if this page is your own
    //display your page
    //if no
    //display whichever user's page ur on

    return (
        <div>
            <div className="UserInformation">
                <span className="UserPic"></span>
                <div className="UserText">
                    <h1 className="Username">Username</h1>
                    <h3 className="BioDesc">This is a description</h3>
                </div>
                <div className="UserExtra">
                    <div className="UserExtraInfo">
                        {/* Replace # by the number of lists they made */}
                        <h1 className="UserTextInfo">#</h1>
                        <h2 className="UserTextInfo">Lists</h2>
                    </div>
                    <div className="UserExtraInfo">
                        {/* Replace # by the number of user they follow */}
                        <h1 className="UserTextInfo">#</h1>
                        <h2 className="UserTextInfo">Following</h2>
                    </div>
                    <div className="UserExtraInfo UserExtraR">
                        {/* Replace # by the number of user follow them */}
                        <h1 className="UserTextInfo">#</h1>
                        <h2 className="UserTextInfo">Followers</h2>
                    </div>
                </div>
            </div>
            <ProfileTabs currentTab={currentTab}/>
        </div>
    );
}

export default Profile;