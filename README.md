# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Nota Importante per lo Studente - Setup Iniziale del Progetto

Benvenuto/a a `labo-string`!

Questo repository è un **template di partenza** per il tuo laboratorio valutato. Come avrai modo di leggere nelle istruzioni del laboratorio, una parte fondamentale del tuo lavoro iniziale (Esercizio 1) consisterà nell'analizzare attentamente la struttura e la configurazione corrente di questo progetto.

**Potresti notare che alcuni aspetti della configurazione iniziale – inclusa questa stessa documentazione (`README.md`), il file `package.json` e la gestione dei file da ignorare (`.gitignore`) – sono stati volutamente lasciati incompleti o potrebbero non seguire tutte le best practice per un progetto Node.js.**

Il tuo primo compito sarà proprio quello di identificare queste aree di miglioramento e apportare le necessarie correzioni e completamenti, come dettagliato nelle istruzioni del laboratorio, per portare il progetto a uno standard qualitativo superiore.

Buona analisi e buon lavoro!

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione 

- git clone https://github.com/danibaldoooo/ssgs-labo-02.git
- cd ssgs-labo-02
- npm install

## Avvio
Per avviare da riga di comando interattiva:
- node index.js

## Test
- npm test

## Itegrazione Codecov
Questo progetto utilizza Codecov per l'analisi e la visualizzazione della code coverage. 

Pipeline CI/CD con GitHub Actions
Il progetto è configurato con una pipeline di integrazione continua utilizzando GitHub Actions:

Trigger: La pipeline viene eseguita automaticamente ad ogni push e pull request verso il main 
Passaggi principali:
Setup dell'ambiente Node.js
Installazione delle dipendenze
Esecuzione dei test con generazione del report di coverage
Upload dei risultati di coverage a Codecov
Puoi visualizzare i dettagli della configurazione nel file .github/workflows/do-tests.yml.

Badge di Stato
CI Tests: Mostra lo stato dell'ultima esecuzione della pipeline di test (passa/fallisce)
Codecov: Mostra la percentuale attuale di code coverage del progetto

---

*Suggerimento: Presta particolare attenzione ai requisiti dell'Esercizio 1 del laboratorio per completare e correggere questo README e gli altri file di configurazione.*
