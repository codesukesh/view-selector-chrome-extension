document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('input');
    let viewSelectorStorageKey = false;
    chrome.storage.sync.get("viewSelectorStorageKey", (event) => {
        if (event) {
            checkbox.checked = event.viewSelectorStorageKey;
        }
        else {
            // setChromeStorage(viewSelectorStorageKey);
            checkbox.checked = viewSelectorStorageKey
        }
    })
    checkbox.addEventListener('change', function (event) {
        // console.log(this)
        viewSelectorStorageKey = this.checked;
        setChromeStorage(viewSelectorStorageKey);
    })
})

const setChromeStorage = (viewSelectorStorageKey) => {
    chrome.storage.sync.set({ viewSelectorStorageKey });
}
