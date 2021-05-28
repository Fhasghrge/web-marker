import { hightInstance } from './index';
import { DEFAULT_COLOR, HOVER_COLOR } from './types';

export const createTag = (top, left, id) => {
  const $span = document.createElement('span');
  $span.style.left = `${left - 20}px`;
  $span.style.top = `${top - 25}px`;
  $span.dataset['id'] = id;
  $span.textContent = '删除';
  $span.classList.add('temp-marker-remove-tip');
  document.body.appendChild($span);
};

export const releaseCopy = (text) => {
  document.addEventListener('copy', (e) => {
    const clipBordData = e.clipboardData || window.clipBordData;
    if (!clipBordData) return;
    if (text.trim()) {
      e.preventDefault();
      clipBordData.setData('text/plain', text);
    }
  });
};

export const createSwitch = () => {
  const $label = document.createElement('label');
  const $checkbox = document.createElement('input');
  const $span = document.createElement('span');
  $label.classList.add('web-marker-switch');
  $checkbox.type = 'checkbox';
  $checkbox.defaultChecked = false;
  $span.classList.add('web-marker-name')
  $span.textContent = 'L'
  $checkbox.addEventListener('change', e => {
    if(e.target.checked) {
      hightInstance.run()
    }else {
      hightInstance.stop()
    }
  })
  $label.append($checkbox, $span)
  document.body.append($label)
};
