import './styles/cta.css';

function CTA({buttonAction, buttonName, desc}) {
  return (
    <div className="cta-section">
      <div className="cta__button">
        <button onClick={buttonAction}>{buttonName}</button>
      </div>
      <div className="cta__desc">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default CTA;
