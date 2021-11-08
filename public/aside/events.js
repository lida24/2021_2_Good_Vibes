import eventBus from "../scripts/eventBus.js";

const asideEvents = (element) => {
    const closeBtn = element.getElementsByClassName('aside-container_close-button')[0];

    closeBtn.addEventListener ('click', (event) => {
        event.preventDefault();

        eventBus.emit('hide aside');
    });
}

export default asideEvents;