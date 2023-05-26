const Menu = () => {
  return (
    <div className="menu">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action list-group-item-light active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Power quality test power</a>
      <a class="list-group-item list-group-item-action list-group-item-light" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Energy meetering</a>
      <a class="list-group-item list-group-item-action list-group-item-light" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Energy audit</a>
      <a class="list-group-item list-group-item-action list-group-item-light" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
    </div>
    </div>
  );
};

export default Menu;
