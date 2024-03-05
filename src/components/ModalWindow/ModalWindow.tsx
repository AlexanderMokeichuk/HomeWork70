import React, {PropsWithChildren} from "react";


const ModalWindow: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <div className={"position-fixed z-1 top-0 start-0 opacity-50 w-100 h-100 bg-dark"}/>
      <div className="modal d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;