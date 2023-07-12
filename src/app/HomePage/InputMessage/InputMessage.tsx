import styles from "./inputMessage.module.css";

export default function InputMessage() {
  return (
    <div className={styles.inputMessageWrap}>
      <div className={styles.textAreaComponent}>
        <textarea
          name="message"
          id="message"
          placeholder="Insert text here"
          draggable={false}
        ></textarea>
      </div>
      <div className={styles.sendButtonComponent}>
        <button>Send</button>
      </div>
    </div>
  );
}
