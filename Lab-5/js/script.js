/* Task 1 */

const idSelector = document.getElementById('selector');
const classSelector = document.querySelector('.selector');


const idHandler = () => {
  idSelector.classList.toggle('id-class');
}

const selectorHandler = () => {
  classSelector.classList.toggle('selector-class');
}

idSelector.addEventListener('click', idHandler);
classSelector.addEventListener('click', selectorHandler);

/* Task 2 */
const image = document.getElementById('image')
const images = document.getElementById('images')
const addBtn = document.getElementById('add');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const deleteBtn = document.getElementById('delete');

let zoomCounter = 1;

const handleAdd = () => {
  const node = image.cloneNode(true);
  
  images.appendChild(node);
  zoomCounter = 1;

  const list = document.querySelectorAll('.image');
  
  for (let key = 0; list.length > key; key++) {
    const element = list[key];

    element.style.transform = 'scale(1)';
    element.style.top = '0px';
  }
}

const handleDelete = () => {
  const list = document.querySelectorAll('.image');
  
  if (!list.length) {
    return;
  }
  
  const lastNode = list[list.length - 1];
  
  lastNode.remove();
  zoomCounter = 1;

  const updatedList = document.querySelectorAll('.image');

  for (let key = 0; updatedList.length > key; key++) {
    const element = list[key];

    element.style.transform = 'scale(1)';
    element.style.top = '0px';
  }
}

const handleZoomIn = () => {
  const list = document.querySelectorAll('.image');

  if (!list.length) {
    return;
  }

  const lastNode = list[list.length - 1];
  zoomCounter += 0.1;
  
  lastNode.style.transform = `scale(${zoomCounter})`;
  lastNode.style.top = `-${zoomCounter * 100}px`;
  
};

const handleZoomOut = () => {
  const list = document.querySelectorAll('.image');

  if (!list.length) {
    return;
  }

  const lastNode = list[list.length - 1];
  zoomCounter -= 0.1;

  lastNode.style.transform = `scale(${zoomCounter})`;
  lastNode.style.top = `-${zoomCounter * 100}px`;

};

addBtn.addEventListener('click', handleAdd);
deleteBtn.addEventListener('click', handleDelete);
zoomInBtn.addEventListener('click', handleZoomIn);
zoomOutBtn.addEventListener('click', handleZoomOut);