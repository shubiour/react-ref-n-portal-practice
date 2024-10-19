export default function ResultModal({ refDialog, targetTime, remainingTime, onReset }) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(( 1 - remainingTime / (targetTime * 1000)) * 100 );

  return (<dialog ref={refDialog} className="result-modal">
    {userLost && <h2>You lost</h2>}
    {!userLost && <h2>Your won</h2>}
     {!userLost && <p>Your score : <strong>{score}</strong>.</p>}
    <p>The target time was <strong>{targetTime}</strong> seconds.</p>
    <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
    <form method="dialog" onSubmit={onReset}>
      <button>Close</button>
    </form>
  </dialog>);
}