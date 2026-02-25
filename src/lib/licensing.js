/**
 * Licensing Logic for JARVIS
 */

export const getMachineInfo = async () => {
    if (window.electronAPI) {
        return await window.electronAPI.getMachineInfo();
    }
    return { hwid: 'BROWSER_DEMO', username: 'Guest' };
};

export const saveConfiguration = async (config) => {
    if (window.electronAPI) {
        return await window.electronAPI.saveConfig(config);
    }
    return { success: false, error: 'Not running in desktop mode' };
};

export const checkSystemStatus = async () => {
    if (window.electronAPI) {
        return await window.electronAPI.checkConfig();
    }
    return { exists: false, licensed: false };
};

export const generateLicenseForAdmin = async (hwid) => {
    if (window.electronAPI) {
        return await window.electronAPI.generateLicenseKey(hwid);
    }
    return null;
};
