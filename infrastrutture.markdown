---
layout: home
title: Infrastrutture
permalink: /infrastrutture/
nav_order: 4
---

# Infrastrutture
### La sicurezza delle infrastrutture come fondamento per la sicurezza

---

## Le infrastrutture fondamento della comunicazione
Le infrastrutture sono la parte fondamentale della comunicazione, sulle infrastrutture girano i servizi essenziali al
funzionamento dei vari sistemi di comunicazione. _I PC, gli Smartphone, i Server, gli apparati di rete_, tutti questi e 
molti altri dispositivi formano le infrastrutture necessarie per usufruire dei servizi, che siano comunicazione 
interpersonale, comunicazione di dati a una azienda o semplicemente l'interrogazione di un database, formano
infrastrutture e ogni componente è dipendente dall'altro per lo svolgimento dei compiti.

---

## La sicurezza delle infrastrutture
Le infrastrutture sono quindi la componente principale della comunicazione e per questo devono essere protette 
scrupolosamente per non mettere a repentaglio qualsiasi dato comunicato. Esistono diversi metodi di prevenzione per
proteggere un sistema da potenziali attacchi.

* **Usare un firewall**: un firewall permette di bloccare determinate porte d'accesso (ingoing) o di uscita (outgoing) 
  in una macchina, così da proteggere i servizi utilizzati e non avere rischi sui servizi non utilizzati su porte aperte.
  Si possono anche accettare chiamate verso una porta solo per determinati indirizzi IP. Per questo scopo esistono 
  firewall come Windows Firewall su Windows Server e Firewalld e UFW su Linux.
  
![stack](/assets/images/firewall.svg)

* **Aggiornamenti Software**: gli aggiornamenti software sono utili per mantenere la macchina protetta da falle di sicurezza
  recenti e risolte, un software obsoleto può portare a un dispositivo ad avere potenziali falle pericolose per i dati
  degli utenti che ne usufruiscono.

  Gli aggiornamenti software possono essere eseguiti così:
  - _Windows Update_ su Windows

  - _Su Linux_:
    Ubuntu e Debian: # apt update && apt upgrade
    Fedora: # dnf update --refresh
    Arch Linux: # pacman -Syu
  
* **Service Misconfiguration**: può succedere che, per negligenza, la configurazione dei dispositivi venga fatta in modo 
  errato, attivando o lasciando attive opzioni magari non adatte a una connessione pubblica e che quindi possono 
  portare a problemi di sicurezza sulla macchina e dopo a problemi sull'intera comunicazione tra i dispositivi in rete.
  
## Falle Hardware
Può succedere che vengano scoperte falle nell'architettura delle CPU, queste falle non sono risolvibili permanentemente
sulle unità colpite, per via del fatto che queste falle sono sulla architettura hardware, quindi a livello fisico.