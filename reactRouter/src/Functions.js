export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/princesharma2004')
    return response.json()
}
