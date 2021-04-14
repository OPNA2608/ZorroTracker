const { remote, webFrame, shell } = require('electron');
webFrame.setZoomFactor(1);		// testing only

window.preload = {
	/* close the current window */
	close: function() {
		remote.getCurrentWindow().close();
	},

	/* minimize the current window */
	minimize: function() {
		remote.getCurrentWindow().minimize();
	},

	/* maximize/unmaximize the current window */
	maximize: function() {
		const w = remote.getCurrentWindow();

		if (!w.isMaximized()) {
			w.maximize();

		} else {
			w.unmaximize();
		}
	},

	/* function to open an URL in an external browser. DO NOT open in Electron please! */
	openInBrowser: function(url:string){
		shell.openExternal(url);
	},
}