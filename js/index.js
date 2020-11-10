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
