import React, { useEffect, useState } from "react";

import { Hashicon } from "@emeraldpay/hashicon-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileId } from "../feature/checkProfile/checkProfileSlice";
import { followAccount } from "../feature/followingAccounts/followingAccountSlice";

import { Button } from "react-bootstrap";
import { RiCheckFill, RiUserFollowFill } from "react-icons/ri";

function FollowerAccountItem(props) {
  const dispatch = useDispatch();
  const selectedProfileId = useSelector(
    (state) => state.checkProfileReducer.profileId
  );
  const storeFollowingAccounts = useSelector(
    (state) => state.followingAccountReducer.followingAccounts
  );

  const [followButtonTitle, setFollowButtonTitle] = useState("Follow");
  const [tickIconStatus, setTickIconStatus] = useState(false);

  function handleFollowButtonClick(e) {
    dispatch(
      followAccount({
        followedId: props.id,
        followerId: localStorage.getItem("psnUserId"),
      })
    );
    setFollowButtonTitle("Followed");
    setTickIconStatus(true);
  }

  function handleClick(e) {
    dispatch(getProfileId(props.id));
  }

  useEffect(() => {
    if (storeFollowingAccounts !== null) {
      for (let i = 0; i < storeFollowingAccounts.length; i++) {
        if (storeFollowingAccounts[i].id === props.id) {
          setTickIconStatus(true);
          setFollowButtonTitle("Followed");
        }
      }
    }
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-between my-5" style={{ display: "flex", alignItems: "center" }}>
      <div>
        <Hashicon value={props.id} size={50} />
      </div>
      <div className="mx-3 fw-bold">
        <Link
          to="/newsfeed/profile"
          className="text-decoration-none text-dark"
          onClick={handleClick}
          style={{ fontSize: "25px" }}
        >
          {props.firstName + " " + props.lastName}
        </Link>
      </div>
      <div>
        <Button
          variant={tickIconStatus ? "primary" : "success"}
          onClick={handleFollowButtonClick}
          disabled={tickIconStatus}
          style={{ backgroundColor: "#3d85c6" }}
        >
          {followButtonTitle}{" "}
          {tickIconStatus ? <RiCheckFill /> : <RiUserFollowFill />}
        </Button>
      </div>
    </div>
  );
}

export default FollowerAccountItem;
