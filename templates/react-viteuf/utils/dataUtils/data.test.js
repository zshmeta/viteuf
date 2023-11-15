import openModal from '../../src/utils/dataUtils/data';
import dataModals from '../../src/data/';

describe('openModal', () => {
  const modals = dataModals.modals;
  const modalContentByTitle = {};
  modals.forEach(modal => {
    modalContentByTitle[modal.title] = modal.content;
  });

  it('should log the content of the modal with the given title', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const title = modals[0].title;
    openModal(title);
    expect(consoleSpy).toHaveBeenCalledWith(modalContentByTitle[title]);
    consoleSpy.mockRestore();
  });

  it('should log undefined if the title is not found', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const title = 'Non-existent Title';
    openModal(title);
    expect(consoleSpy).toHaveBeenCalledWith(undefined);
    consoleSpy.mockRestore();
  });
});