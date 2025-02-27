import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFollowingAccounts } from "../feature/followingAccounts/followingAccountSlice";
import FollowingAccountItem from "./FollowingAccountItem";


import "../components/styles/FollowingList.module.css";

function FollowingList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeFollowingAccounts = useSelector(
    (state) => state.followingAccountReducer.followingAccounts
  );

  useEffect(() => {
    if (localStorage.getItem("psnToken") === null) {
      navigate("/unauthorized");
    }
    
    dispatch(getFollowingAccounts());
  }, []);

  return (
    <div className="following-list-container">
      <h1>Following List</h1>
      <div className="following-accounts">
      {storeFollowingAccounts ? (
        storeFollowingAccounts.map((followingAccount) => {
          return (
            <FollowingAccountItem
              key={followingAccount.id}
              id={followingAccount.id}
              firstName={followingAccount.firstName}
              lastName={followingAccount.lastName}
            />
          );
        })
      ) : (
        <span></span>
      )}
      </div>
    </div>
  );
}

export default FollowingList;
