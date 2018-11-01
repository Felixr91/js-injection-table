let characters = [
  {
    name: 'Goku',
    attack: 'Kamehameha',
    race: 'Saiyan'
  }, {
    name: 'Freiza',
    attack: 'Planet Destroyer',
    race: 'alien'
  }, {
    name: 'Vegeta',
    attack: 'Final Flash',
    race: 'Saiyan'
  }, {
    name: 'Picollo',
    attack: 'Special Beam Cannon',
    race: 'Namekian'
  }
]

function drawTable(arr) {
  let template = `
  <tr>
    <th>NAME</th>
    <th>ATTACK</th>
    <th>RACE</th>
  </tr>
  `
  for (let i = 0; i < arr.length; i++) {
    let character = arr[i];
    template += `
    <tr>
      <td>${character.name}</td>
      <td>${character.attack}</td>
      <td>${character.race}</td>
    </tr>
    `
  }
  let elem = document.getElementById('characters')
  elem.innerHTML = template;
}
drawTable(characters)