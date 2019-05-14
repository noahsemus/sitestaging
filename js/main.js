function titleLeave() {
   return new Promise(resolve => {
    TweenMax.to('.navLink', 2, { css:{color:"#FFFFFF"}});
    TweenMax.to('#projectContainer', 2, { marginLeft: '-2200px', ease: Power4.easeInOut});
    TweenMax.to('#bigName', 2, { marginLeft: '60vw', ease: Power4.easeInOut});
    TweenMax.to('#fontSuck', 2, { right: '-70vw', ease: Power4.easeInOut});
    TweenMax.to('#leftBG', 2, { width: '100vw', ease: Power4.easeInOut, onComplete: resolve });
  });
}

function titleEnter() {
  return new Promise(resolve => {
    TweenMax.to('body', .5, { css:{background:"#000000"}});
    TweenMax.from('#projectImages', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
    TweenMax.from('#projectText', 2.2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
  });
}

function prLeave() {
  return new Promise(resolve => {
    TweenMax.to('#projectImages', 2, { opacity: 0, marginTop: '5vh', ease: Power4.easeInOut, onComplete: resolve });
    TweenMax.to('#projectText', 2.2, { opacity: 0, marginTop: '10vh', ease: Power4.easeInOut, onComplete: resolve });
  });
}

function prEnter() {
   return new Promise(resolve => {
    TweenMax.from('#projectContainer', 2, { marginLeft: '-2200px', ease: Power4.easeInOut});
    TweenMax.to('.navLink', 2, { css:{color:"#000000"}});
    TweenMax.to('body', .5, { css:{background:"#FFFFFF"}});
    TweenMax.from('#bigName', 2, { marginLeft: '60vw', ease: Power4.easeInOut});
    TweenMax.from('#fontSuck', 2, { right: '-70vw', ease: Power4.easeInOut});
    TweenMax.to('#leftBG', 2, { width: '50vw', ease: Power4.easeInOut, onComplete: resolve });
  });
}

barba.init({
  transitions: [{
    name: 'homeOut',
    sync: true,
    from: { namespace: 'home' },
    to: { namespace: 'project' },
    leave: ({ data }) => titleLeave(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none'
    },  
      
    afterEnter: ({ next }) => titleEnter(), 

  },                              
                
  { 
    name: 'projectOut',
    sync: true,
    from: { namespace: 'project' },
    to: { namespace: 'home' },
    leave: ({ data }) => prLeave(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
    },  
      
    beforeEnter(next){

    },
      
    afterEnter: ({ next }) => prEnter(),
  }
               
  ],
});

barba.hooks.leave(data => {
  // this hook will be called after each transitions
        $(document).ready(function(){
            
	        $( "#pr01" ).hover(function() {
                $( ".thingTitle" ).html('GMessage');
                $('body').css('background', 'aquamarine')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr02" ).hover(function() {
                $( ".thingTitle" ).html('EFE');
                $('body').css('background', 'orange')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr03" ).hover(function() {
                $( ".thingTitle" ).html('Prattler');
                $('body').css('background', 'dodgerblue')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr04" ).hover(function() {
                $( ".thingTitle" ).html('Fun Stuff :>)');
                $('body').css('background', 'springgreen')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr05" ).hover(function() {
                $( ".thingTitle" ).html('Print');
                $('body').css('background', 'fuchsia')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr06" ).hover(function() {
                $( ".thingTitle" ).html('Columbia');
                $('body').css('background', 'red')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr07" ).hover(function() {
                $( ".thingTitle" ).html('Renaissance');
                $('body').css('background', 'mediumslateblue')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr08" ).hover(function() {
                $( ".thingTitle" ).html('Poster Series');
                $('body').css('background', 'cyan')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( "#pr09" ).hover(function() {
                $( ".thingTitle" ).html('Crane Selects');
                $('body').css('background', 'sandybrown')}, function(){
                    $( ".thingTitle" ).html('Things');
                    $('body').css('background', 'none');
                }
            );
            
            $( ".thingTitle" ).html('Things');
            
            class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
              static pluginName = 'horizontalScroll';

              transformDelta(delta, fromEvent) {
                if (!/wheel/.test(fromEvent.type)) {
                  return delta;
                }

                // @see: https://github.com/idiotWu/smooth-scrollbar/issues/181

                const { x, y } = delta; 

                return {
                  y: 0,
                  x: Math.abs(x) > Math.abs(y) ? x : y,
                  // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),
                };
              }
            }

            Scrollbar.use(HorizontalScrollPlugin /* you forgot this */);

            // the following is forked from https://codepen.io/supah/pen/vvNmOr

            /*--------------------
            Wheel Option
            -------------------*/
            let option = {
              x: 0,
              speed: 1.5,
              limit: 2,
              time: 0.3,
            };

            Scrollbar.init(document.querySelector('#leftPage'), {
              plugins: {
                horizontalScroll: true,
              },
            });

            Scrollbar.init(document.querySelector('#projectTextContain'), {
              plugins: {
                horizontalScroll: false,
              },
            });
    
            Scrollbar.init(document.querySelector('#projectImagesContain'), {
              plugins: {
                horizontalScroll: false,
              },
            });
            
            
        });
});