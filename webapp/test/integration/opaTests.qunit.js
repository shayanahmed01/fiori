/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["zfi/demo/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
