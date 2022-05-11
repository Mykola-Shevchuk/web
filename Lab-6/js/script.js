const cell = document.getElementById('cell');
const targetCell = document.querySelector('table tr:nth-child(2) td:nth-child(6)');
const input = document.getElementById('color-picker');

const colorGenerator = () => `#${Math.floor(100000 + Math.random() * 600000)}`;

const hoverHandler = () => {
  cell.style.backgroundColor = colorGenerator();
};

const mouseLeaveHandler = () => {
  cell.style.backgroundColor = '';
};

const clickHandler = () => {
  cell.style.backgroundColor = `${input.value}`;
}

const dblclickHandler = () => {
  targetCell.style.backgroundColor = `${input.value}`;
}

cell.addEventListener('mouseover', hoverHandler);
cell.addEventListener('mouseleave', mouseLeaveHandler);

cell.addEventListener('mouseleave', mouseLeaveHandler);

input.addEventListener('input', clickHandler);
targetCell.addEventListener('dblclick', dblclickHandler);