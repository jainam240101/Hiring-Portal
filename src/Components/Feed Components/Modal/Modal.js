/** @format */

import React, { useReducer } from "react";
import classes from "./Modal.module.css";
import { useMutation } from "@apollo/client";
import { ImCross } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";
import { useForm, onChangehandler } from "../../../Hooks/useForm";
import { createPostMutation } from "./Mutation";

const Modal = ({ profilePic, name, modalHandler }) => {
  const [createPost] = useMutation(createPostMutation);
  const [state, dispatch] = useReducer(useForm, {
    description: "",
    mediaLink: "",
  });
  const uploadImage = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      onChangehandler(dispatch, event.target.name, e.target.result);
    };
  };
  const submitHandler = async () => {
    console.log(state);
    const { data } = await createPost({
      variables: {
        postType: "Temp",
        description: state.description,
        mediaLink: state.mediaLink,
      },
    });
    const { success, message, error } = data.createPost;
    console.log(success, message, error);
  };
  const handleChange = (event) => {
    onChangehandler(dispatch, event.target.name, event.target.value);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.box}>
        <div className={classes.top}>
          <h3 className={classes.heading}>Create A Post</h3>
          <div className={classes.cross}>
            <ImCross
              className={classes.Cross}
              onClick={modalHandler}
              color={"black"}
              size={20}
            />
          </div>
        </div>
        <div className={classes.info}>
          <img className={classes.pic} src={profilePic} alt={"Profile Pic"} />
          <div className={classes.name}>{name}</div>
        </div>
        <textarea
          name="description"
          onChange={handleChange}
          className={classes.textArea}
          placeholder={"What Do you want to talk about?"}
        />
        <div className={classes.submitContainer}>
          <input
            name="mediaLink"
            style={{ display: "none" }}
            type="file"
            id="icon-button-file"
            accept="image/*"
            onChange={uploadImage}
          />
          <label htmlFor="icon-button-file">
            <BsCardImage className={classes.image} size={23} />
          </label>
          <button onClick={submitHandler} className={classes.btn}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
