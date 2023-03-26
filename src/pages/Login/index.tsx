import React, { useEffect, useState } from "react";
import Captcha from "../../components/Captcha";
import styles from "./styles.module.css";
import { validCharacters } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigation = useNavigate();
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const setValues = () => {
    const upperLImit = validCharacters.length;
    let result = "";
    for (let i = 0; i < 6; i++) {
      let digit = Math.floor(Math.random() * 100);
      if (digit > upperLImit) {
        digit = 100 - digit;
      }
      result += validCharacters[digit];
    }
    setCaptchaValue(result);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaInput(event.target.value);
  };
  const loginHandler = () => {
    if (captchaInput === captchaValue) {
      navigation("/dash");
    } else {
      setIsValid(false);
    }
  };
  useEffect(() => {
    setValues();
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <label className={styles.label} htmlFor="email">
            Enter Email Id
          </label>
          <input id="email" className={styles.input} />
        </div>
        <div>
          <label className={styles.label} htmlFor="password">
            Enter Password
          </label>
          <input id="password" className={styles.input} />
        </div>
        <div>
          <Captcha captchaValue={captchaValue} />
        </div>
        <div>
          <label className={styles.label} htmlFor="captcha">
            Enter Captcha
          </label>
          <input
            id="captcha"
            className={styles.input}
            value={captchaInput}
            onChange={changeHandler}
          />
        </div>
        {!isValid && <div className={styles.msg}>* Enter valid captcha</div>}
        <div>
          <button className={styles.btn} onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
