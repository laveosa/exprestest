import FileFolderController from "/classes/FileFolderController.js";
import FileTreeController from "/classes/FileTreeController.js";
import LogController from "/classes/LogController.js";

let ActiveCtrl = null;

const MainCtrl = {
  _state: null,
  getState: () => {
    return new Promise((resolve, reject) => {
      let state = window.location.pathname;
      MainCtrl._state = state.split("/")[1];
      resolve(MainCtrl._state);
    });
  },
  initializeRelatedCtrl: state => {
    switch (state) {
      case "home":
        ActiveCtrl = new FileFolderController();
        break;
      case "file-tree":
        ActiveCtrl = new FileTreeController();
        break;
      case "log":
        ActiveCtrl = new LogController();
        break;
    }
  },
  initialize: () => {
    MainCtrl.getState().then(response => {
      MainCtrl.initializeRelatedCtrl(response);
    });
  }
};

MainCtrl.initialize();
