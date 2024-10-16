import React, { useState } from "react";

import { Hashicon } from "@emeraldpay/hashicon-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileId } from "../feature/checkProfile/checkProfileSlice";
import { unfollowAccount } from "../feature/followingAccounts/followingAccountSlice";

import { Button } from "react-bootstrap";
import { RiCheckFill, RiDeleteBin6Line } from "react-icons/ri";

function FollowingAccountItem(props) {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    (state) => state.checkProfileReducer.profileId
  );

  const [followButtonTitle, setFollowButtonTitle] = useState("Unfollow");
  const [tickIconStatus, setTickIconStatus] = useState(false);

  function handleFollowButtonClick(e) {
    dispatch(
      unfollowAccount({
        followedId: props.id,
        followerId: localStorage.getItem("psnUserId"),
      })
    );
    setFollowButtonTitle("Unfollowed");
    setTickIconStatus(true);
  }

  function handleClick(e) {
    dispatch(getProfileId(props.id));
  }

  return (
    <div className="d-flex align-items-center justify-content-between my-5" style={{ display: "flex", alignItems: "center" }}>
      <div>
        <Hashicon value={props.id} size={50} />
      </div>
      <div className="mx-3 fw-bold" style={{ display: "flex", alignItems: "center" }} >
        <Link
          to="/newsfeed/profile"
          className="text-decoration-none text-dark"
          onClick={handleClick}
          style={{ fontSize: "25px" }}
        >
          {props.firstName + " " + props.lastName}
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}> 
        <Button
          variant={tickIconStatus ? "danger" : "success"}
          onClick={handleFollowButtonClick}
          style={{ backgroundColor: "#3d85c6" }}
        >
          {followButtonTitle}{" "}
          {tickIconStatus ? <RiCheckFill /> : <RiDeleteBin6Line />}
        </Button>
      </div>
    </div>
  );
}

export default FollowingAccountItem;
