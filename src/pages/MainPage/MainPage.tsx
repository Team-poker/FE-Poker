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
import { addCurrentUser } from "../../redux/actions";

const MainPage = ({ socket, addCurrentUser }: any) => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobPosition, setJobPosition] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Enter your name!");
  const [formValid, setFormValid] = useState(false);
  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "firstName":
        setNameDirty(true);
        break;
      default:
    }
  };
  const inputHandler = (e: any) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "jobPosition":
        setJobPosition(e.target.value);
        break;
    }

    const re = new RegExp('^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$');
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Enter your name correctly!');
    } else {
      setNameError('');
    }
  };


  const sendData = (e: any) => {
    e.preventDefault();
    if (firstName !== "") {
      socket.emit("joinRoom", {
        firstName,
        lastName,
        jobPosition,
        roomName: "testroom",
      });
      //if empty error message pops up and returns to the same page
    } else {
      alert("First name and roomname are must !");
      window.location.reload();
    }

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      jobPosition: jobPosition,
      roomName: "testroom",
      dealer: true,
    };
    addCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    history.push("/lobby");
  };

  useEffect(() => {
    if (nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError]);
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
            <input
              className="input__modal"
              type="text"
              value={lastName}
              onChange={(e) => inputHandler(e)}
              name="lastName"
            />
          </label>
          <label>
            <span className="input__text">Your job position(optional):</span>
            <br />
            <input
              className="input__modal"
              type="text"
              value={jobPosition}
              onChange={(e) => inputHandler(e)}
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
              <WhiteButton name={buttonsNames[4].name} />
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
};
export default connect(null, mapDispatchToProps)(MainPage);

