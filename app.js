const styleClassName = 'viewSelector';
const element = document.querySelector("*");

let previousEventTarget, previousEventTargetBorderStyle;

const onExtensionSwitchedOnHandler = (event, innerE) => {
    console.log(event.target, innerE)
    if (innerE.viewSelectorStorageKey) {
        if (previousEventTarget) {
            previousEventTarget.classList.remove(styleClassName);
        }
        previousEventTarget = event.target;
        previousEventTargetBorderStyle = event.target.style.border;
        event.target.classList.add(styleClassName);
    }
}

// const highLightElementHandler = event => {
//     // chrome.storage.sync.get('viewSelectorStorageKey', (innerE) => {
//         // console.log(event.target, innerE)
//         // if (innerE.viewSelectorStorageKey) {
//             if (previousEventTarget) {
//                 previousEventTarget.classList.remove(styleClassName);
//             }
//             previousEventTarget = event.target;
//             previousEventTargetBorderStyle = event.target.style.border;
//             event.target.classList.add(styleClassName);
//         // }
//     // })
// }
const highLightElementHandler = event => {
    chrome.storage.sync.get('viewSelectorStorageKey', onExtensionSwitchedOnHandler.bind(this, event))
}
element.addEventListener('mouseover', highLightElementHandler);