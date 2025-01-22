exports.config = {
    runner: 'local',
    path: '/',
    port: 4723, // Default Appium port
    specs: ['./test/specs/**/*.js'],
    capabilities: [{
        platformName: 'Android',
        deviceName: 'emulator-5554',
        app: '/path/to/your/app.apk',
        automationName: 'UiAutomator2',
    }],
    logLevel: 'info',
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000
    },
};