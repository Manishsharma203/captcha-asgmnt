import React from "react";
import styles from "./styles.module.css";

interface IProps {
  captchaValue: string;
}
export default function Captcha(props: IProps) {
  const { captchaValue } = props;
  return (
    <div>
      {captchaValue && (
        <div className={styles.captchaContainer}>
          <p>{captchaValue}</p>
        </div>
      )}
    </div>
  );
}
