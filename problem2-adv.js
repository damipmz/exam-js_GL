/* Problema 2 - Intermedio.

Para continuar celebrando el campeonato mundial de Argentina haremos un ejercicio en su
honor. Sabiendo que la fecha en que Argentina ganó la tercera fue el 2022-12-18 haga función
para indicar cuántos días pasaron hasta hoy de manera “humanizada”.
daysFromTheThird() */


const humanizeDate = () => {

    let theThirdDate = new Date("12/18/2022"); // Ingreso la fecha de la final del mundial (esta en milisegundos).
    let today = new Date(); // Obtengo la fecha actual.
    let difference = today - theThirdDate; // Calculo la diferencia.

    let days = Math.floor(difference / 1000 / 60 / 60 / 24); // Calculo horas diviendo entre los milisegundos en un día. Con "Math.floor" redondeo el numero hacia abajo.
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `Pasaron ${days} días, ${hours} horas y ${minutes} minutos desde el Domingo, 18 de diciembre de 2022`;
}
