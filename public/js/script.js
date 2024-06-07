$(document).ready(function() {
  $('#calendar').fullCalendar({
    events: [
      // Fetch events from the server or define them here
    ]
  });

  anime({
    targets: '.tab-pane',
    translateY: [-50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100), // Add stagger effect
    duration: 1000,
    easing: 'easeOutQuad'
  });

  // Initialize Bootstrap tabs
  $('#hrTabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});
