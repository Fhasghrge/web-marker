import Highlighter from 'web-highlighter';
import { releaseCopy, createSwitch } from './dom';
import { DEFAULT_COLOR, HOVER_COLOR } from './types'

export const hightInstance = new Highlighter({
  style: {
    className: DEFAULT_COLOR,
  },
});


hightInstance
  .on(Highlighter.event.CLICK, ({ id }) => {
    hightInstance.remove(id);
  })
  .on(Highlighter.event.HOVER, ({ id }) => {
    hightInstance.addClass(HOVER_COLOR, id);
  })
  .on(Highlighter.event.HOVER_OUT, ({ id }) => {
    hightInstance.removeClass(HOVER_COLOR, id);
  })
  .on(Highlighter.event.CREATE, ({ sources }) => {
    const text = sources && sources[0].text;
    releaseCopy(text);
  })
  .on(Highlighter.event.REMOVE, ({ ids }) => {
    console.log('remove -', ids);
  });
  
hightInstance.run();

createSwitch();
