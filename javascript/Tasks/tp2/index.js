document.addEventListener('DOMContentLoaded', () => {
  const paragraph = document.createElement('p');
  const main = document.getElementById('main');
  paragraph.innerHTML = "Mon <strong>grand</strong> contenu"
  paragraph.classList.add('important')
  paragraph.style.color = 'green'
  main.appendChild(paragraph);

  const customAlert = () => alert('Hello World')
  const hello = document.getElementsByTagName('input')[1];
  hello.addEventListener('click', () => {
    customAlert()
  })

  const valueBtn = document.getElementsByTagName('input')[2]
  valueBtn.addEventListener('click', () => {
    const value = document.getElementsByTagName('input')[0].value
    alert(value)
  })
})