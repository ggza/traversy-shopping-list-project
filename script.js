const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (itemInput === '') {
    alert('Please enter an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // Add the item to the DOM
  itemList.appendChild(li);

  resetUI();

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      resetUI();
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  resetUI();
}

function resetUI() {
  const items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearBtn.style.display = 'none';
    filter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    filter.style.display = 'block';
  }
}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

resetUI();
