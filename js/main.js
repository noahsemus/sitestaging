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
    TweenMax.to('.navLink', 2, { css:{color:"#000000"}});
    TweenMax.to('body', .5, { css:{background:"#FFFFFF"}});
    TweenMax.to('#projectContainer', 2, { marginLeft: '0px', ease: Power4.easeInOut});
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
    sync: false,
    from: { namespace: 'project' },
    to: { namespace: 'home' },
    leave: ({ data }) => prLeave(),
    // Same as above but we get destructured `next` directly from `data`
    
    afterLeave(data) {
        data.current.container.style.display = 'none';
    },  
      
    beforeEnter(next){
        return new Promise(resolve => {
            TweenMax.set('#projectContainer', { marginLeft: '-2200px', onComplete: resolve });
        });
    },
      
    enter: ({ next }) => prEnter(),
  }
               
  ],
});

barba.hooks.after(data => {
  // this hook will be called after each transitions
            $(document).ready(function(){
                        
            $( ".thingTitle" ).html('Things');
                
            $('.project').click(function() {
                $( "#projectContainer" ).css('z-index', '-1');
                $('body').css('background', 'aquamarine');
                $(this).unbind('mouseenter mouseleave');
            });
            
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
            

            (function() {
                function scrollHorizontally(e) {
                    e = window.event || e;
                    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                    document.getElementById('leftPage').scrollLeft -= (delta*25); // Multiplied by 40
                    e.preventDefault();
                }
                if (document.getElementById('leftPage').addEventListener) {
                    // IE9, Chrome, Safari, Opera
                    document.getElementById('leftPage').addEventListener("mousewheel", scrollHorizontally, false);
                    // Firefox
                    document.getElementById('leftPage').addEventListener("DOMMouseScroll", scrollHorizontally, false);
                } else {
                    // IE 6/7/8
                    document.getElementById('leftPage').attachEvent("onmousewheel", scrollHorizontally);
                }
            })();

            
            
        });
});