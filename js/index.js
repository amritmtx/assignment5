// Function to handle Sidebar click functionality
function handleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('is-hidden-small');
  sidebar.classList.toggle('is-block-small');
}

// Function to change into card view
function cardView() {
  var container = document.getElementById('card-table-container');
  container.classList.remove('table-view');
}

// Function to change into table view
function tableView() {
  var container = document.getElementById('card-table-container');
  container.classList.add('table-view');
}

// Function for fetching cards through server
(function getCardsData() {
  var content = '';
  var cardTableContainer = document.getElementById('card-table-container');
  fetch('https://reqres.in/api/users?page=1')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.data.forEach((item) => {
        console.log(item);
        content += `
        <div
        class="slds-grid slds-grid--vertical slds-grid--vertical-align-center card--modifier slds-p-around--small slds-m-vertical--small"
      >
        <div class="slds-text-align_center headshot--modifier width-10">
          <img
            src="${item.avatar}"
            alt="headshot"
            class="slds-avatar--circle"
          />
        </div>
        <div class="card-body--content slds-m-top--small width-20 table-cell">
          ${item.first_name} ${item.last_name}
        </div>
        <div class="slds-m-bottom--small card-body--sub-content is-none-table">
          ${item.email}
        </div>
        <div class="card-body--sub-content is-none-table">
          Total Contributions
        </div>
        <div class="card-body--content width-15 table-cell">${getRandomAmount()}</div>
        <div class="is-hidden-small is-block-table width-15 table-cell">
        ${getRandomAmount()}
        </div>
        <div class="is-hidden-small is-block-table width-15 table-cell">
        ${getRandomAmount()}
        </div>
        <div class="view-col--modifier slds-m-top--small width-15 table-cell">
          <span>
            <span>
              <svg
                class="slds-icon slds-icon-text-default slds-icon--x-small"
                aria-hidden="true"
              >
                <use
                  xlink:href="icons/utility-sprite/svg/symbols.svg#preview"
                ></use>
              </svg>
            </span>
            View
          </span>
        </div>
        <div class="card-body--menu-icon width-10">
          <svg
            class="slds-icon slds-icon-text-default slds-icon--x-small"
            aria-hidden="true"
          >
            <use
              xlink:href="icons/utility-sprite/svg/symbols.svg#threedots"
            ></use>
          </svg>
        </div>
      </div>
        `;
      });
      cardTableContainer.innerHTML += content;
    })
    .catch((err) => {
      content += '<p>Network Issue, No Response Found !!<p>';
      cardTableContainer.innerHTML += content;
    });
})();

// Utility function to genrate random amount values
function getRandomAmount() {
  return `$${Math.floor(Math.random() * 1000000 + 1)}`;
}
