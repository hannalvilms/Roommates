import lowPayments from "../media/lowPayments.png";
import lowPaymentsBlue from "../media/lowPaymentsBlue.png";
import timeline from "../media/timeline.png";
import timelineBlue from "../media/timelineBlue.png";
import classWhite from "../media/classWhite.png";
import classBlue from "../media/classBlue.png";
import transparency from "../media/transparency.png";
import transparencyBlue from "../media/transparencyBlue.png";
function Benefits() {
  function hovered(newIcon, id) {
    id.childNodes[0].src = newIcon;
  }
  function unHovered(oldIcon, id) {
    id.childNodes[0].src = oldIcon;
  }

  return (
    <div className="benefits column">
      <h2>Benefits</h2>
      <div className="benefits-list">
        <div
          className="benefit"
          id="lowPaymentsBenefit"
          onMouseOver={() =>
            hovered(
              lowPaymentsBlue,
              document.getElementById("lowPaymentsBenefit")
            )
          }
          onMouseLeave={() =>
            unHovered(
              lowPayments,
              document.getElementById("lowPaymentsBenefit")
            )
          }
        >
          <img alt="Low payments" src={lowPayments} />
          <h5>Low down payments</h5>
          <p>We offer a variety of loan options to meet your unique needs.</p>
        </div>
        <div
          className="benefit"
          id="timelineBenefit"
          onMouseOver={() =>
            hovered(timelineBlue, document.getElementById("timelineBenefit"))
          }
          onMouseLeave={() =>
            unHovered(timeline, document.getElementById("timelineBenefit"))
          }
        >
          <img alt="Timeline" src={timeline} />
          <h5>Works with your timeline</h5>
          <p>Count on us to respond ASAP and always meet deadlines.</p>
        </div>
        <div
          className="benefit"
          id="classBenefit"
          onMouseOver={() =>
            hovered(classBlue, document.getElementById("classBenefit"))
          }
          onMouseLeave={() =>
            unHovered(classWhite, document.getElementById("classBenefit"))
          }
        >
          <img alt="Best in class" src={classWhite} />
          <h5>Best-in-class service</h5>
          <p>
            Clear communication, friendly staff, and local market expertise.
          </p>
        </div>
        <div
          className="benefit"
          id="transparencyBenefit"
          onMouseOver={() =>
            hovered(
              transparencyBlue,
              document.getElementById("transparencyBenefit")
            )
          }
          onMouseLeave={() =>
            unHovered(
              transparency,
              document.getElementById("transparencyBenefit")
            )
          }
        >
          <img alt="Total transparency" src={transparency} />
          <h5>Total transparency</h5>
          <p>We'll always keep you and your agent informed and up-to-date.</p>
        </div>
      </div>
    </div>
  );
}
export default Benefits;
