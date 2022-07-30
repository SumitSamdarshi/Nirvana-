import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {  useContext, useRef, useState  } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useParams } from "react-router";

export default function Topbar() {

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [file, setFile] = useState(null);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     userId: user._id,
  //   };
  //   if (file) {
  //     console.log("yo yo");
  //     const data = new FormData();
  //     const fileName = Date.now() + file.name;
  //     data.append("name", fileName);
  //     data.append("file", file);
  //     newUser.profilePicture = fileName;
  //     console.log(newUser);
  //     try {
  //       await axios.post("/upload", data);
  //     } catch (err) {}
  //   }
  //   try {
  //     await axios.put("users/"+user._id, newUser);
  //     // window.location.reload();
  //   } catch (err) {}
  // };


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Nirvana</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
          
        {/* <form className="" onSubmit={submitHandler}>
          <div className="">
            <label htmlFor="file" className="shareOption">
              <span className="shareOptionText">change Avatar</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <button className="" type="submit">
            add
          </button>
        </form> */}

      </div>
    </div>
  );
}
