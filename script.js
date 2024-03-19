document.addEventListener('DOMContentLoaded', function() {
    const bookedSeats = new Set();

    function renderSeats() {
        const container = document.getElementById('bus-layout');
        container.innerHTML = '';

        const seats = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2'];
        seats.forEach(seat => {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat');
            seatElement.textContent = seat;
            if (bookedSeats.has(seat)) {
                seatElement.classList.add('booked');
            } else {
                seatElement.addEventListener('click', () => bookSeat(seat));
            }
            container.appendChild(seatElement);
        });
    }

    function bookSeat(seat) {
        bookedSeats.add(seat);
        renderSeats();
        updateLists();
    }

    function updateLists() {
        const bookedSeatsList = document.getElementById('booked-seats');
        const remainingSeatsList = document.getElementById('remaining-seats');

        bookedSeatsList.innerHTML = '';
        remainingSeatsList.innerHTML = '';

        bookedSeats.forEach(seat => {
            const li = document.createElement('li');
            li.textContent = seat;
            bookedSeatsList.appendChild(li);
        });

        const remainingSeats = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2'].filter(seat => !bookedSeats.has(seat));
        remainingSeats.forEach(seat => {
            const li = document.createElement('li');
            li.textContent = seat;
            remainingSeatsList.appendChild(li);
        });
    }

    renderSeats();
    updateLists();
});
