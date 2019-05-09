function titleLeave() {
   return new Promise(resolve => {
    TweenMax.to('.navLink', 2, { css:{color:"#FFFFFF"}, onComplete: resolve });
  });
}

function titleEnter() {
  return new Promise(resolve => {
    TweenMax.to('#pageContain', 2, { opacity: 1, onComplete: resolve });
  });
}

barba.init({
  transitions: [{
    sync: true,
    from: { namespace: 'home' },
    to: { namespace: 'project' },
    leave: (data) => titleLeave,
    // Same as above but we get destructured `next` directly from `data`
      
    enter: ({ next }) => titleEnter, 
  }],
});

barba.hooks.after(data => {
  // this hook will be called after each transitions
            $(document).ready(function(){
                        
            $( "#thingTitle" ).html('Things');
            
	        $( "#pr01" ).hover(function() {
                $( "#thingTitle" ).html('GMessage');
                $('#rightPage').css('background', 'aquamarine')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr02" ).hover(function() {
                $( "#thingTitle" ).html('EFE');
                $('#rightPage').css('background', 'orange')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr03" ).hover(function() {
                $( "#thingTitle" ).html('Prattler');
                $('#rightPage').css('background', 'dodgerblue')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr04" ).hover(function() {
                $( "#thingTitle" ).html('Fun Stuff :>)');
                $('#rightPage').css('background', 'springgreen')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr05" ).hover(function() {
                $( "#thingTitle" ).html('Print');
                $('#rightPage').css('background', 'fuchsia')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr06" ).hover(function() {
                $( "#thingTitle" ).html('Columbia');
                $('#rightPage').css('background', 'red')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr07" ).hover(function() {
                $( "#thingTitle" ).html('Renaissance');
                $('#rightPage').css('background', 'mediumslateblue')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr08" ).hover(function() {
                $( "#thingTitle" ).html('Poster Series');
                $('#rightPage').css('background', 'cyan')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $( "#pr09" ).hover(function() {
                $( "#thingTitle" ).html('Crane Selects');
                $('#rightPage').css('background', 'sandybrown')}, function(){
                    $( "#thingTitle" ).html('Things');
                    $('#rightPage').css('background', 'none');
                }
            );
            
            $(function() {

               $("#leftPage").mousewheel(function(event, delta) {

                  this.scrollLeft -= (delta * 3);

                  event.preventDefault();

               });

            });
            
        });
});