'use babel';
/* global atom */

import { Disposable, CompositeDisposable } from 'atom';
import VerticalTabsView from './vertical-tabs-view';

export default {

  activate() {
    this.disposables = new CompositeDisposable();
    this.panes = [];

    this.disposables.add(
      atom.workspace.observePanes((pane) => {
        this.panes.push(
          new VerticalTabsView(pane)
        );
      })
    );
  },

  deactivate() {
    this.disposables.dispose();
    this.panes.forEach((pane) => pane.destroy());
  },

};
