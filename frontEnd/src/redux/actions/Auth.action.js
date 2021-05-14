export function updateAuth(updateObj) {
    return {
        type: updateObj.type,
        index: updateObj.action,
        data: updateObj.data
    };
}