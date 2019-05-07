import barba from '@barba/core';

function leaveTran(e) {
   return new Promise(resolve => {
    TweenMax.fromTo(e, 2, { opacity: 1 }, { opacity: 0, onComplete: resolve });
  });
}

function enterTran(e) {
  return new Promise(resolve => {
    TweenMax.fromTo(e, 2, { opacity: 0 }, { opacity: 1, onComplete: resolve });
  });
}

barba.init({
  transitions: [{
    sync: true,
    from: { namespace: 'home' },
    to: { namespace: 'about' },
    leave: (data) => leaveTran(data.current.querySelector('[data-title]'),
    // Same as above but we get destructured `next` directly from `data`
    enter: ({ next }) => enterTran(next.querySelector('[data-title]'), 
  }],
});