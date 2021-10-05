import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "./blocks/Header/Header";
import Main from "./blocks/Main/Main";
import Footer from "./blocks/Footer/Footer";
import "./MainPage.scss";
import Modal from "../../components/Modal/Modal";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import Switch from "../../components/Switch/Switch";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addCurrentUser, setInitialUsersList } from "../../redux/actions";
import { IUser } from "../../ts/interfaces/app_interfaces";

const MainPage = ({ socket, addCurrentUser, setInitialUsersList }: any) => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [jobDirty, setJobDirty] = useState(false);
  const [nameError, setNameError] = useState("Enter your name!");
  const [lastNameError, setLastNameError] = useState("Enter your last name!");
  const [jobError, setJobError] = useState("Enter your job!");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "firstName":
        setNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "jobPosition":
        setJobDirty(true);
        break;
      default:
    }
  };
  const inputHandler = (e: any) => {
    setFirstName(e.target.value);
    const re = new RegExp("^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$");
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError("Enter your name correctly!");
    } else {
      setNameError("");
    }
  };
  const lastNameHandler = (e:any) => {
    setLastName(e.target.value);
    const re = new RegExp("^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$");
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLastNameError('Enter your last name correctly!');
    } else {
      setLastNameError("");
    }
  }
  const jobHandler = (e: any) => {
    setJobPosition(e.target.value);
    if (e.target.value === "") {
      setJobError("Enter your job correctly!");
    } else {
      setJobError("");
    }
  }

  const sendData = (e: any) => {
    e.preventDefault();
    if (firstName !== "") {
      socket.emit("joinRoom", {
        firstName,
        lastName,
        jobPosition,
        roomName: "testroom",
        dealer: false,
      });
      //if empty error message pops up and returns to the same page
    } else {
      alert("First name and roomname are must !");
      window.location.reload();
    }

    socket.on("currentUser", (curUser: any) => {
      const newUser = {
        id: curUser.id,
        firstName: curUser.firstName,
        lastName: curUser.lastName,
        jobPosition: curUser.jobPosition,
        roomName: "testroom",
        dealer: curUser.dealer,
      };
      addCurrentUser(newUser);
    });

    socket.on("usersList", (usersList: Array<IUser> | []) => {
      setInitialUsersList(usersList);
      history.push("/lobby");
    });
  };

  socket.on("playerLeft", (newUsers: any) => {
    setInitialUsersList(newUsers);
    const user = newUsers.filter((item: any) => item.id === socket.id);
    const updatedUser = {
      id: user[0].id,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      jobPosition: user[0].jobPosition,
      roomName: "testroom",
      dealer: user[0].dealer,
    };
    addCurrentUser(updatedUser);
  });


  useEffect(() => {
    if (nameError || lastNameError || jobError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, lastNameError, jobError]);
  const buttonsNames = [
    {
      name: "Start new game",
    },
    {
      name: "Connect",
    },
    {
      name: "Load file",
    },
    {
      name: "Confirm",
    },
    {
      name: "Cancel",
    },
  ];
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <Header />
      <Main />
      <div className="button-modal" onClick={() => setActiveModal(true)}>
        <Button className="button-link" name={buttonsNames[0].name} />
      </div>
      <Modal active={activeModal} setActive={setActiveModal}>
        <div className="modal__window">
          <h3 className="lobby__modal"> Connect to lobby</h3>
          <span className="span__modal">
            Connect as
            <br />
            Observer
            <span className="switch__modal">
              <Switch />
            </span>
          </span>
        </div>
        <form className="form__modal" onSubmit={sendData}>
          <label>
            <span className="input__text">Your first name:</span>
            <br />
            {nameDirty && nameError && (
              <div style={{ color: "red" }}>{nameError}</div>
            )}
            <input
              value={firstName}
              onChange={(e) => inputHandler(e)}
              onBlur={(e) => blurHandler(e)}
              className="input__modal"
              type="text"
              name="firstName"
            />
          </label>
          <label>
            <span className="input__text">Your last name(optional):</span>
            <br />
            {lastNameDirty && lastNameError &&  (
                <div style={{ color: "red" }}>{lastNameError}</div>
            )}
            <input
              className="input__modal"
              onBlur={(e) => blurHandler(e)}
              type="text"
              value={lastName}
              onChange={(e) => lastNameHandler(e)}
              name="lastName"
            />
          </label>
          <label>
            <span className="input__text">Your job position(optional):</span>
            <br />
            {jobDirty && jobError &&  (
                <div style={{ color: "red" }}>{jobError}</div>
            )}
            <input
              className="input__modal"
              onBlur={(e) => blurHandler(e)}
              type="text"
              value={jobPosition}
              onChange={(e) => jobHandler(e)}
              name="jobPosition"
            />
          </label>
          <label>
            <span className="input__text">Image:</span>
            <br />
            <input className="input__photo" type="file" />
            <span className="button__modal">
              <Button className="button__modal" name={buttonsNames[2].name} />
            </span>
          </label>
          <div className="modal__buttons">
            <span
              className="cancel__modal"
              onClick={() => setActiveModal(false)}
            >
              <Button
                disabled={!formValid}
                className="cancel__modal"
                name={buttonsNames[3].name}
                type="submit"
              />
            </span>
            <div onClick={() => setActiveModal(false) }>
              <WhiteButton name={buttonsNames[4].name} type="button" />
            </div>
          </div>
        </form>
      </Modal>
      <Footer />
    </>
  );
};

const mapDispatchToProps = {
  addCurrentUser,
  setInitialUsersList,
};
export default connect(null, mapDispatchToProps)(MainPage);
