/** @format */

import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { cache } from "../../index";
import classes from "./Settings.module.css";
import { useMutation } from "@apollo/client";
import { useForm, onChangehandler } from "../../Hooks/useForm";
import { getProfilePic, updateUserMutation } from "./Queries";
import Chips from "../../Components/Dasboard Components/Skills/Chips/Chips";
import { BsCardImage } from "react-icons/bs";

const Settings = () => {
  const [newSkill, setnewSkill] = useState("");
  const [dispatched, setdispatched] = useState(false);
  const [updateUser] = useMutation(updateUserMutation);
  const profiledata = cache.readQuery({
    query: getProfilePic,
  });
  const [state, dispatch] = useReducer(useForm, {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Bio: "",
    mediaLink: "",
  });
  const submitSkill = (e) => {
    var keyCode = e.code || e.key;
    if (keyCode === "Enter") {
      dispatch({
        type: "addNewSkill",
        data: {
          newSkill: newSkill,
        },
      });
      setnewSkill("");
    }
  };
  const handleChange = (event) => {
    onChangehandler(dispatch, event.target.name, event.target.value);
  };
  const removeSkill = (index) => {
    dispatch({
      type: "removeSkill",
      data: {
        index: index,
      },
    });
  };
  const uploadImage = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      onChangehandler(dispatch, event.target.name, e.target.result);
    };
  };
  const SubmitHandler = async () => {
    if (state.Password === state.ConfirmPassword) {
      const { errors, data } = await updateUser({
        variables: {
          name: state.Name,
          email: state.Email,
          bio: state.Bio,
          password: state.Password,
          skills: state.skills,
          profilePic: state.mediaLink,
        },
      });
      console.log(errors);
      console.log(data);
    } else {
      alert("Passords do not match");
    }
  };
  if (profiledata) {
    if (profiledata.error) return <div>Error!!!</div>;
    if (!dispatched) {
      dispatch({
        type: "edituserInitialState",
        values: {
          Name: profiledata.getMe.name,
          Bio: profiledata.getMe.bio,
          Email: profiledata.getMe.email,
          Skills: profiledata.getMe.skills,
        },
      });
      setdispatched(true);
    }
    return (
      <div className={classes.Container}>
        <div className={classes.nav}>
          <Link to='/profile'>Back to Profile</Link>
        </div>
        <div className={classes.topContainer}>
          <div className={classes.heading}>Update Basic Details</div>
          <button className={classes.deleteBtn}>Delete Account</button>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.form}>
            <div className={classes.nameContainer}>
              <div className={classes.flex}>
                <div className={classes.col}>
                  <label className={classes.label}>Name</label>
                  <input
                    type={"text"}
                    value={state.Name}
                    onChange={handleChange}
                    name='Name'
                    className={classes.input}
                  />
                </div>
                <div className={classes.col}>
                  <label className={classes.label}>Email</label>
                  <input
                    name='Email'
                    onChange={handleChange}
                    value={state.Email}
                    type={"email"}
                    className={classes.input}
                  />
                </div>
              </div>
              <div className={classes.flex}>
                <div className={classes.col}>
                  <label className={classes.label}>Password</label>
                  <input
                    type={"password"}
                    className={classes.input}
                    name='Password'
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.col}>
                  <label className={classes.label}>Confirm Password</label>
                  <input
                    onChange={handleChange}
                    name='ConfirmPassword'
                    type={"password"}
                    className={classes.input}
                  />
                </div>
              </div>
              <label>Bio</label>
              <textarea
                value={state.Bio}
                onChange={handleChange}
                name='Bio'
                type='text'
                className={classes.textArea}
              />
              <br />
              <label>Skills</label>
              <input
                value={newSkill}
                onChange={(e) => {
                  setnewSkill(e.target.value);
                }}
                onKeyPress={submitSkill}
                name='text'
                type={"text"}
                placeholder={"Python, JavaScript, etc."}
                className={classes.input}
              />
              <div className={classes.skills}>
                {state.skills?.map((element, index) => (
                  <Chips
                    cross={true}
                    deleteHandler={removeSkill}
                    value={index}
                    key={index}>
                    {element}
                  </Chips>
                ))}
              </div>
            </div>
            <div>
              <img
                className={classes.image}
                src={profiledata?.getMe.profilePic}
                alt='Joe Rogan'
              />
              <div className={classes.updateBtn}>
                <input
                  name='mediaLink'
                  style={{ display: "none" }}
                  type='file'
                  id='icon-button-file'
                  accept='image/*'
                  onChange={uploadImage}
                />
                <label htmlFor='icon-button-file'>
                  <BsCardImage className={classes.logo} size={20} />{" "}
                  <label>Upload New Image</label>
                </label>
              </div>
            </div>
          </div>
          <button onClick={SubmitHandler} className={classes.submitBtn}>
            Submit
          </button>
        </div>
      </div>
    );
  }
  return <div>Loading</div>;
};

export default Settings;
