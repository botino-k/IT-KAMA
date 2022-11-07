import DialogsContainer from "./Dialogs/DialogsContainer";

const DialogsPage = (props) => {

  return (
    <>
      <DialogsContainer store = {props.store} />
    </>
  )
};

export default DialogsPage;