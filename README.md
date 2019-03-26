# CarAPI
A RESTful backend api with node.js and mongodb


## Asennus
Aja `npm install` projektin juuressa.
Projekti käyttää mongodb:tä ja oletuksena käyttää localhostissa pyörivää tietokantaa josta löytyy Cardb niminen tietokanta, jolla
on cars niminen collection. Projektin mukana on .csv-tiedosto josta voi lukea testidataa kantaan komennolla `mongoimport --host=127.9.9.1 -d Cardb -c cars --type csv --file ./car.csv --headerline`
Serveri käynnistyy komennolla `npm run start`

## Testaus postmanilla

Autolistauksen saa lähettämällä GET-kutsun projektin juureen. Tämä palauttaa jokaisen tietokannassa olevan auton ID:n, merkin ja mallin.

/car routen takaa löytyy muu API:n toiminnallisuus. Lähettämällä GET-kutsun tähän osoitteeseen, palauttetaan requestin bodyssa määriteltyjen arvojen mukaan suoritetun tietokantahaun tulokset. Haun voi tehdä kaikilla carManagerModel.js tiedostossa määritellyillä propertyillä, sekä minYear ja maxYear arvoilla, joilla voidaan rajata minkä vuotisia autoja halutaan hakea. Tyhjä body palauttaa kaikkien autojen kaikki tiedot.

Uusien autojen lisääminen onnistuu lähettämällä post-kutsu /car -osoitteeseen. Auton lisääminen vaatii että kaikki carManagerModel.js -tiedostossa määritellyt kentät on annettu requestin bodyssa, muuten vastauksena tulee virhe.

Jos requestin parametrina on annettu auton ID, voidaan hakea yksittäisen auton tiedot, päivittää auton tietoja tai poistaa auto järjestlemästä. Tietojen hakemiseen ja poistamiseen riittää että tehdään GET tai DELETE -kutsu niin että ID-parametri on annettuna. Esim `http://localhost:3000/car/AUTONTUNNUS`. ID:nä käytetään mongodb:n generoimia id-arvoja. Tietojen päivittämiseen käytetään PUT-kutsua, ja päivitettävät tiedot lisätään requestin bodyyn.
