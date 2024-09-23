/**
 * Handles getting the correct localized string for the requested key
 * @param textKey The key for which text should be fetched
 * @returns The localized text as a string
 */
async function GetLocalizedText(textKey) {
    try {
        // Dynamically import the JSON data and cast it to LocalizationData
        const jsonData = (await import("../assets/language.json")).default;
        // Return a new Promise
        return new Promise((resolve, reject) => {
            // Get the language from the 'data-language' attribute, default to "en"
            const lang = document.documentElement.getAttribute("data-language") ?? "en";
            // Construct the key based on the language and textKey
            const localizedText = jsonData[`${lang}_${textKey}`];
            // Check if the localized text exists
            if (localizedText) {
                resolve(localizedText); // Resolve with the localized text
            }
            else {
                reject(`No localized text found for key: ${lang}_${textKey}`); // Reject if not found
            }
        });
    }
    catch (error) {
        // Handle any errors from importing the JSON file
        return Promise.reject(`Failed to load localization with error: ${error}`);
    }
}
export default GetLocalizedText;
//# sourceMappingURL=language.js.map