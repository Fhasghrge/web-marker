import Highlighter from 'web-highlighter';
import { createTag, listenRemove } from './dom';
import { getMarkerPosition } from './util'
import { DEFAULT_COLOR, HOVER_COLOR } from './types'

export const hightInstance = new Highlighter({
  style: {
    className: DEFAULT_COLOR,
  },
});


hightInstance
  .on(Highlighter.event.CLICK, (e) => {
    console.log('click -', e);
  })
  .on(Highlighter.event.HOVER, ({ id }) => {
    console.log('hover -', id);
    hightInstance.addClass(HOVER_COLOR, id);
  })
  .on(Highlighter.event.HOVER_OUT, ({ id }) => {
    console.log('hover out -', id);
    hightInstance.removeClass(HOVER_COLOR, id);
  })
  .on(Highlighter.event.CREATE, ({ sources }) => {
    console.log('create -', sources);
    sources.forEach((s) => {
      const position = getMarkerPosition(hightInstance.getDoms(s.id)[0]);
      createTag(position.top, position.left, s.id);
    });
    sources = sources.map((hs) => ({ hs }));
  })
  .on(Highlighter.event.REMOVE, ({ ids }) => {
    console.log('remove -', ids);
  });

listenRemove();

hightInstance.run();
