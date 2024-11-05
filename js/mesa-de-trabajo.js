window.addEventListener('load', function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const form = document.querySelector('form')
  const firstName = document.getElementById('inputNombre')
  const lastName = document.getElementById('inputApellido')
  const email = document.getElementById('inputEmail')
  const password = document.getElementById('inputPassword')
  const url = 'https://unlpam-todo-api.vercel.app'

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const payload = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    }

    const settings = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    realizarRegister(settings)
  })

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    fetch(`${url}/users`, settings)
      .then(response => {
        console.log('Respuesta: ', response)
        return response.json()
      })
      .then(data => {
        console.log('Data: ', data)
      })
      .catch(error => {
        console.log('Promesa rechazada: ', error)
      })
  }
})
