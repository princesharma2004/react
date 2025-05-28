function customRender(reactElement, container) {
    /*
    // Create a DOM element based on the type of the reactElement
    const domElement = document.createElement(reactElement.type)

    // Set the inner HTML and attributes of the DOM element
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    // Append the created DOM element to the container
    container.appendChild(domElement)
    */

    // Create a DOM element based on the type of the reactElement
    const domElement = document.createElement(reactElement.type)

    // Set the attributes of the DOM element
    for (const [key, value] of Object.entries(reactElement.props)) {
        domElement.setAttribute(key, value)
    }

    // Set the inner HTML of the DOM element
    domElement.innerHTML = reactElement.children

    // Append the created DOM element to the container
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google',
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
