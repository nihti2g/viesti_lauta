Käyttöohjeet:

lataa/kloonaa gitti

Server puoli:
cd ../server
npm install
npm start

Client puoli:
cd ../client
npm install
npm run serve

Avaa localhost:8080

Klikkaa Home/Register/Login linkkejä päästäksesi kyseiselle sivulle

Kuvaus:

Viestilauta missä voi luoda viestin Home sivulla joka sisältää aiheen, viestin ja kuvan. Viestipohja on piilotettuna ja sen saa auki painamalla nappulasta Toggle Message Form. Viestin postaamisen jälkeen viesti tulee suoraan näkyviin sivulle ja viestipohja menee takaisin piiloon.

Haasteet:
Ajatuksena oli aluksi että sisäänkirjautumattoman käyttäjän postaaman viestin "Anon" nimen perässä olisi järjestysluku tai jokin vastaava mikä näyttäisi jollain tasolla edes että mitä viestejä kukin anon on postannut, mutta tajusin hyvin äkkiä että tämä vaatisi keksien käyttämistä ja kukaan ei pidä kekseistä niin peruin idean saman tien.
Kamppailin useita päiviä asian kanssa, että olisin saanut yksittäisen viestin avattua "uudeksi sivuksi" jolloin siihen olisi voinut vastata suoraan, mutta en saanut tätä toimimaan.
Kamppailin useita päiviä asian kanssa, että olisin saanut rekisteröitymisen toimimaan, mutta jostain syystä ei löydä rekisteröintiä.
Kun en saanut rekisteröintiä toimimaan tämä tarkoitti suoraan sitä, että sisään kirjautumineenkaan ei toimi.
Jossain vaiheessa ilmeni bugi joka tuplasi "sivun" aukiolevan sivun "alle".

Onnistumiset:
Omasta mielestäni sain toimimaan hyvin sen että sivujen välillä pystyi vaihtelemaan kätevästi. Viestien postaaminenkin onnistui.

Mitä jatkokehittäisin:
Ensinnäkin haluaisin saada rekisteröitymisen toimimaan, sen jälkeen sisäänkirjautumisen ja viimeisenä viesteihin suoraan vastaamisen ja mahdollisesti sen että yksittäiset viestit saisi avattua joko uutena sivuna tai vähänniinkuin ponnahdusikkunana.

Erittäin kiinnostava aihe ja kokonaisuus, mutta harmittaa kun jäi homma näin pahasti kesken ja aika johon tämän tekeminen jäi oli vähintäänkin liian vähäinen kun tässä oli kaiken näköisiä joulu kiireitä.