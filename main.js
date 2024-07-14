document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById('calendar');
    const eventDetailsEl = document.getElementById('event-details');
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
  
    $(calendarEl).fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      displayEventTime: false, // Disable default time rendering
      events: [
        {
          title: 'Chef\'s Special Tasting',
          start: '2024-07-14T18:00:00',
          end: '2024-07-14T20:00:00',
          description: 'Experience an exclusive tasting event featuring special dishes crafted by our head chef.'
        },
        {
          title: 'Wine Pairing Dinner',
          start: '2024-07-21T18:00:00',
          end: '2024-07-21T20:00:00',
          description: 'Join us for a delightful evening of fine dining paired with exquisite wines from renowned vineyards.'
        }
      ],
      eventRender: function(event, element) {
        // Customize the event title to include the start and end times
        const timeRange = moment(event.start).format('h:mm a') + " - " + moment(event.end).format('h:mm a');
        element.find('.fc-title').text(`${event.title} (${timeRange})`);
      },
      eventClick: function(event) {
        // Display event details below the calendar
        const details = `
          <h3>${event.title}</h3>
          <p><strong>Time:</strong> ${moment(event.start).format('h:mm a')} - ${moment(event.end).format('h:mm a')}</p>
          <p>${event.description}</p>
        `;
        eventDetailsEl.innerHTML = details;
        eventDetailsEl.style.display = 'block';
      }
    });
  
    hamburger.addEventListener("click", function () {
      const isOpen = nav.style.display === "block";
      nav.style.display = isOpen ? "none" : "block";
      hamburger.setAttribute("aria-expanded", !isOpen);
    });
  });
  