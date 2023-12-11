import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  //the first arg are props, the second one - ref

  const dialog = useRef();
  const formattedRamainingTime = (remainingTime / 1000).toFixed(2);
  const userLost = formattedRamainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {/* onClose is for pressing the ESC */}
      <h2>{userLost ? "You lost!" : `Your score is: ${score}`}</h2>
      <p>
        Target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}.
        </strong>
      </p>
      {!userLost && (
        <>
          <p>
            <small>
              <i>You have {formattedRamainingTime} seconds left</i>
            </small>
          </p>
        </>
      )}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
