let nombreIngresado = prompt("Ingresa tu nombre");
let continuar = true

const mensajeInicial = "Hola " + nombreIngresado + "! " + "Elige tu próximo viaje: \n" +
    "1. Cancún \n" +
    "2. Punta Cana \n" +
    "3. Buzios \n" +
    "4. Europa \n" +
    "5. Disney \n"

function iniciarConsulta() {
    let resultado = prompt(mensajeInicial).trim()
    if (resultado !== "1" && resultado !== "2" && resultado !== "3" && resultado !== "4" && resultado !== "5") {
        alert("Ingresa una opción correcta.")

    } else {
        let argentina = confirm("¿Realizarás tu compra desde Argentina? \n En ese caso se le sumará el 21% de IVA a tu compra.")
        if (argentina === true) {
            iva = 1.21
        } else {
            iva = 1
        }

        switch (resultado) {
            case "1":
                importe = 4000 * iva
                alert("El paquete a Cancún sale USD " + importe.toFixed())
                let numeroPasajeros1 = prompt("Ingresar cantidad de pasajeros");
                let resultadoPasajeros1 = numeroPasajeros1 * importe
                console.log(resultadoPasajeros1)
                alert("El precio total es de USD " + resultadoPasajeros1.toFixed())
                break
            case "2":
                importe = 5000 * iva
                alert("El paquete a Punta Cana sale USD " + importe.toFixed())
                let numeroPasajeros2 = prompt("Ingresar cantidad de pasajeros");
                let resultadoPasajeros2 = numeroPasajeros2 * importe
                console.log(resultadoPasajeros2)
                alert("El precio total es de USD " + resultadoPasajeros2.toFixed())
                break
            case "3":
                importe = 2000 * iva
                alert("El paquete a Buzios sale USD " + importe.toFixed())
                let numeroPasajeros3 = prompt("Ingresar cantidad de pasajeros");
                let resultadoPasajeros3 = numeroPasajeros3 * importe
                console.log(resultadoPasajeros3)
                alert("El precio total es de USD " + resultadoPasajeros3.toFixed())
                break
            case "4":
                importe = 6000 * iva
                alert("El paquete a Europa sale USD " + importe.toFixed())
                let numeroPasajeros4 = prompt("Ingresar cantidad de pasajeros");
                let resultadoPasajeros4 = numeroPasajeros4 * importe
                console.log(resultadoPasajeros4)
                alert("El precio total es de USD " + resultadoPasajeros4.toFixed())
                break
            case "5":
                importe = 5000 * iva
                alert("El paquete a Disney sale USD " + importe.toFixed())
                let numeroPasajeros5 = prompt("Ingresar cantidad de pasajeros");
                let resultadoPasajeros5 = numeroPasajeros5 * importe
                console.log(resultadoPasajeros5)
                alert("El precio total es de USD " + resultadoPasajeros5.toFixed())
                break
            default:
                alert("Debes seleccionar una opción válida.")
        }
    }
}

function consulta() {
    while (continuar) {
        iniciarConsulta()
        continuar = confirm("¿Deseas hacer una nueva búsqueda?")
    }
    alert("Gracias por tu consulta.")
}
consulta()