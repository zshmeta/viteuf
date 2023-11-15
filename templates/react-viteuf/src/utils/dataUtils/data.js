import dataModals from '../../data/';

function openModal(title) {
  console.log(modalContentByTitle[title]);
}

// Make sure the JSON data is properly imported and parsed
const modals = dataModals.modals;

// Create an object that maps the title to the content
const modalContentByTitle = {};
modals.forEach(modal => {
  modalContentByTitle[modal.title] = modal.content;
});

// Export the object that maps the title to the content
export default openModal;