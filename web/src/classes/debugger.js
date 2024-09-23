/**
 * Used to log values given as parameter
 * Function triggers when debug is set to true in local storage
 * @param debugLogs An array of type debugInput logged
 */
function DebugLog(debugLogs) {
    if (localStorage.getItem("debug") === "true") {
        console.log("========================== [ fetched settings values from document ] ==========================");
        debugLogs.forEach((log) => {
            console.log(log.logText, log.logValue);
        });
        console.log("===============================================================================================");
    }
}
export default DebugLog;
//# sourceMappingURL=debugger.js.map