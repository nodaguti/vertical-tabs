'use babel';
/* global atom */

export default class VerticalTabsView {

  constructor(pane) {
    this.pane = pane;
    this.paneElement = atom.views.getView(pane);

    this.paneElement.classList.add('vertical-tabs');
  }

  destroy() {
    this.paneElement.classList.remove('vertical-tabs');
  }
}
