import CTA from '../../CTA';
import './style.css';
function Homepage() {
  const buttonDesc = 'Get amazing offers when you sign up ';
  const getCoupon = () => {
    console.log('get coupon');
  };
  return (
    <section className="homepage">
      <div className="homepage__right">
        <CTA buttonAction={getCoupon} buttonName="Sign up" desc={buttonDesc} />
        <div className="homepage__header">
          <h1>This is a heading</h1>
          <p>
            This is another random text created by me Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Eius voluptatem deleniti
            aperiam?.
          </p>
        </div>
      </div>
      <div className="homepage__left">
        <img src="images/aside.svg" alt="" />
      </div>
    </section>
  );
}

export default Homepage;
