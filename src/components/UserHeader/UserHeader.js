import { useStore, useSelector } from "react-redux";
import { useState } from "react";
import { updateProfile } from "../../features/user";
import "./UserHeader.css";

function UserHeader({ firstname, lastname }) {
  const store = useStore();

  const [isOpen, setEditForm] = useState(false);
  const [newFirstname, setNewFirstname] = useState();
  const [newLastname, setNewLastname] = useState();

  const { token } = useSelector((state) => state.userLogin);
  const { firstName } = useSelector((state) => state.userProfile);
  const { lastName } = useSelector((state) => state.userProfile);
  const { isSucceed } = useSelector((state) => state.userProfile);

  const editProfile = (e) => {
    e.preventDefault();
    if (isOpen) {
      setEditForm(false);
    } else {
      setEditForm(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateProfile(store, token, newFirstname, newLastname);
    if ({ isSucceed }) {
      setEditForm(false);
    }
  };

  return isOpen ? (
    <div className="header">
      <h1>Welcome back</h1>
      <form className="edit-content">
        <div className="edit-input">
          <input
            type="text"
            placeholder={firstName}
            onChange={(e) => setNewFirstname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={lastName}
            onChange={(e) => setNewLastname(e.target.value)}
            required
          />
        </div>
        <div className="edit-save">
          <button className="save-button" onClick={submitHandler}>
            Save
          </button>
          <button className="cancel-button" onClick={editProfile}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="header">
      <h1>
        Welcome back <br /> {firstname} {lastname}!
      </h1>
      <button className="edit-button" onClick={editProfile}>
        Edit Name
      </button>
    </div>
  );
}

export default UserHeader;
