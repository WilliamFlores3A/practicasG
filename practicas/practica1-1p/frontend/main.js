import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'

const modal = new bootstrap.Modal('#add-cancha-modal')
const URL = import.meta.env.BACKEND_URL || 'http://localhost:3000/cancha'

async function loadContent () {
  const tbody = document.getElementById('canchas')
  tbody.innerHTML = ''

  const response = await fetch(URL)
  const canchas = await response.json()

  if (canchas.length > 0) {
    canchas.forEach(cancha => {
      const tr = document.createElement('tr')
      const tdid = document.createElement('td')
      const tddescription = document.createElement('td')
      tdid.textContent = cancha.id
      tddescription.textContent = cancha.description
      tr.appendChild(tdid)
      tr.appendChild(tddescription)
      tbody.appendChild(tr)
    })
  } else {
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.textContent = 'No hay canchas'
    td.setAttribute('colspan', 2)
    tr.appendChild(td)
    tbody.appendChild(tr)
  }
}

async function createCancha (description) {
  // fetch post form data
  const options = {
    method: 'POST',
    body: new URLSearchParams({ description })
  }

  const response = await fetch(URL, options)
  const data = await response.json()
  console.log(data)
}

async function handleForm (e) {
  e.preventDefault()
  const submitButton = e.target.querySelector('button[type="submit"]')

  // seding form
  submitButton.disabled = true
  submitButton.textContent = 'Agregando...'

  // creating the object
  const input = e.target.querySelector('#description')
  const description = input.value
  await createCancha(description)

  // form sent
  submitButton.disabled = false
  submitButton.textContent = 'Agregar '
  modal.hide()
  input.value = ''

  loadContent()
}

window.addEventListener('load', loadContent)
document.getElementById('form').addEventListener('submit', handleForm)
