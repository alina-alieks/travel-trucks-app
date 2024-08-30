import css from "./Button.module.css";

export default function Button({ link, text }) {
  return link ? (
    <a className={css.button}>{text}</a>
  ) : (
    <button className={css.button} type="submit">
      {text}
    </button>
  );
}
