/* Images */
import profilePicture from "../media/profilePicture.png";
function NavbarUser() {
  return (
    <div className="user">
      <img alt="user-profile" src={profilePicture} />
      <div className="user-information">
        <h5>Richard Lucas</h5>
        <h6>Renter</h6>
      </div>
    </div>
  );
}

export default NavbarUser;