import sidebarAvatar from "../../assets/avatar.jpg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={sidebarAvatar} alt="avatar" className="sidebar__avatar" />
      <p className="sidebar__name">Name</p>
    </div>
  );
}

export default Sidebar;
