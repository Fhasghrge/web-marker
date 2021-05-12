import { hightInstance } from './index'
import { DEFAULT_COLOR, HOVER_COLOR} from './types'


export const createTag = (top, left, id) => {
  const $span = document.createElement('span');
  $span.style.left = `${left - 20}px`;
  $span.style.top = `${top - 25}px`;
  $span.dataset['id'] = id;
  $span.textContent = '删除';
  $span.classList.add('temp-marker-remove-tip');
  document.body.appendChild($span);
};

export const listenRemove = () => {
  document.addEventListener('click', (e) => {
    const $ele = e.target;
    if ($ele.classList.contains(DEFAULT_COLOR)) {
      const id = $ele.dataset.id;
      log('*click remove-tip*', id);
      hightInstance.removeClass(HOVER_COLOR, id);
      hightInstance.remove(id);
      $ele.parentNode.removeChild($ele);
    }
  })
}