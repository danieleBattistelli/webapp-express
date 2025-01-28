### Esercizio
Ciao ragazzi, è ora di mettere alla prova le vostre conoscenze iniziando a costruire la vostra prima app completa! Ecco i primi step
- Utilizzando il file in allegato, **creiamo un database** con MySQL Workbench
- Creiamo una **nuova applicazione Express**
- **Colleghiamo l’app al db** e verifichiamo che tutto funzioni
- Prepariamo **una rotta index** per ottenere la lista dei film
- Prepariamo **una rotta show** per ottenere i dettagli di un singolo film e le sue recensioni
-- Predisponiamo un’API per **salvare nel database** una nuova recensione legata ad un film
- Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione
### Bonus
- Inserire delle immagini nel progetto express e dunque nel db
- Inserire i dati di connessione al database come variabili d’ambiente
- Inserire un middleware per le rotte inesistenti
- Inserire un middleware per la gestione errori
- Inseriamo le validazioni


API dei Films

method: GET
/films

Restituisce array di films