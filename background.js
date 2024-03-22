
chrome.commands.onCommand.addListener((command,tab) => {
    if (command === 'run_foo') {
        console.log(`Command: ${command}`);
    } else {
        console.log(`Command: ${command}`);
    }    
});