export async function GoToHomepage() {
    return window.location.href = "/";
}

export async function GoToServices() {
    return window.location.href = "/services-and-pricing";
}


export function serializeZodErrors(zodErrors: any[]) {
    let serializedZodErrors: any = {};
    zodErrors.forEach((error) => {
        const zodErrorKey = `${error.path[0]}Error`;
        const zodErrorMessage = error.message.split(" ");
        if(zodErrorMessage.length > 2) {
            zodErrorMessage.shift();
        }
        serializedZodErrors[zodErrorKey] = `${zodErrorMessage.join(" ")}`;
    })
    return serializedZodErrors;
}