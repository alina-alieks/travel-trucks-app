import { useSelector } from "react-redux";
import css from "./CamperFeatures.module.css";
import { selectChoosenItem } from "../../redux/campers/selectors";
import BookForm from "../BookForm/BookForm";
import EquipmentList from "../EquipmentList/EquipmentList";

export default function CamperFeatures() {
  const camper = useSelector(selectChoosenItem);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapFeatures}>
        <EquipmentList camper={camper} />
        <div>
          <p className={css.text}>Vehicle details</p>
          <table className={css.table}>
            <tbody>
              <tr>
                <td>Form</td>
                <td className={css.td}>{camper.form}</td>
              </tr>
              <tr>
                <td>Length</td>
                <td className={css.td}>{camper.length}</td>
              </tr>
              <tr>
                <td>Width</td>
                <td className={css.td}>{camper.width}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td className={css.td}>{camper.height}</td>
              </tr>
              <tr>
                <td>Tank</td>
                <td className={css.td}>{camper.tank}</td>
              </tr>
              <tr>
                <td>Consumption</td>
                <td className={css.td}>{camper.consumption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <BookForm />
    </div>
  );
}
