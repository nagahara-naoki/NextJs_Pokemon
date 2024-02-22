import { useDispatch } from "react-redux";

export default function DressChangeModal(props: any) {
  const dispatch = useDispatch();

  const isModal = props.isModal;
  const cloesModal = () => {
    document.body.style.overflow = "";
    props.setIsModal(false);
  };
  const select = (num: number) => {
    props.setSelectColor(num);
    props.setIsModal(false);
  };

  return (
    <>
      <div className="modal" onClick={cloesModal}>
        <div className={`modalInner ${isModal ? "show" : ""}`}>
          <h1>着せ替えを選択してください</h1>
          <ul className="modalItemList">
            <li onClick={() => select(1)}>
              <p>着せ替え１</p>
            </li>
            <li onClick={() => select(2)}>
              <p>着せ替え２</p>
            </li>
            <li onClick={() => select(3)}>
              <p>着せ替え３</p>
            </li>
            <li onClick={() => select(4)}>
              <p>着せ替え４</p>
            </li>
          </ul>
          <button onClick={cloesModal}>閉じる</button>
        </div>
      </div>
    </>
  );
}
