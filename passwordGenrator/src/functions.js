export function passwordGenrator(length, includeNumbers, includeSymbols, setPassword)
{
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let characters = lowerCase + upperCase;

    if (includeNumbers) {
        characters += numbers;
    }
    if (includeSymbols) {
        characters += symbols;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    setPassword(password);
}

export function copyToClipboard(passwordRef)
{
    if(!passwordRef.current || !passwordRef.current.value) return;
    passwordRef.current.select()
    window.navigator.clipboard.writeText(passwordRef.current.value);
}
