---
layout: home
title: Dati
permalink: /dati/
nav_order: 2
---

# Dati Personali
### La sicurezza dei dati personali, il rispetto della privacy e le normative

---

## Cosa sono i Dati Personali?
Sono dati personali tutti quei dati che fanno parte del gruppo informazioni private di una persona o le informazioni
confidenziali di una azienda o ente.

Esempi di dati personali sono il codice del conto bancario, il numero di telefono o il codice fiscale. La protezione dei
dati personali dipende sia dalla sicurezza del mezzo comunicativo, dalla sicurezza delle infrastrutture e soprattutto 
dall'utente finale.

![stack](/assets/images/stack.svg)

L'utente finale ha anche lui molte responsabilità nella gestione dei dati e la protezione, tra queste c'è l'uso di una 
password sicura, l'autenticazione a due fattori e l'uso di supporti criptati, come su Windows nel caso di edizione Pro
l'uso di Bitlocker, su Linux l'uso di LUKS con dm-verity e cryptosetup e su MacOS l'uso di Filevault.

---

## Criptazione

I dati personali sensibili poi, per maggiore sicurezza, dovrebbero essere sempre criptati, i metodi di criptazione più 
usati sono la criptazione E2E (End to End), dove per ogni dato inviato il mittente la cripta con una chiave pubblica e 
il destinatario lo decripta con una chiave privata e viceversa. Un metodo più semplice è invece aprire una connessione
protetta e criptata tra i due dove i messaggi vengono criptatati per quella connessione e non viene creata una nuova
connessione per ogni invio. Le chiavi di criptazione possono essere principalmente di questi tipi:

* RSA: è un algoritmo di crittografia asimmetrica, la cui dimensione della chiave spazia solitamente tra i 1024 bit e i
  4096 bit. [Qui la specifica](https://tools.ietf.org/html/rfc2437)
* DSA: è un algoritmo per la generazione di firme digitali. [Qui la specifica](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf)
* ED25519: è un algoritmo per la generazione di firme digitali. [Qui la specifica](https://ed25519.cr.yp.to/)



