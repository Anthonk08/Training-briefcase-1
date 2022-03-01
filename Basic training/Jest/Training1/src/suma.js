function sum(num1, num2) {
    return num1 + num2;
}

export { sum };

/*
En package.json necesitas agregar esto encima de script => "type": "module",
Si quieres correr jest necesitas esto: set NODE_OPTIONS=--experimental-vm-modules && npx jest
*/