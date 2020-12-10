---
layout: home
title: Falle Hardware
permalink: /hardwareflaws/
nav_order: 5
---

# Falle Hardware
### Quando la sicurezza è compromessa definitivamente

---

## Le falle hardware, cosa sono?
Le falle hardware sono falle che non sono generate da problemi software, quindi di scrittura del codice e risolvibili con
un update, ma sono problemi sull'hardware, come sulla CPU. Un esempio di falla hardware sono le falle di architettura, 
dove specifiche componenti fisiche della CPU sono vulnerabili a determinati attacchi per un difetto intrinseco del modo
in cui è stata progettata quella componente.

Nel 2018 sono state rese pubbliche 2 falle di sicurezza gravissime dell'architettura delle CPU che colpisce quasi la totalità
delle CPU consumer e business sul pianeta, queste falle si chiamano Meltdown e Spectre.


### Meltdown

Meltdown è una falla che sfrutta una "corsa critica" della CPU tra l'esecuzione delle istruzioni che accedono alla memoria
RAM e il controllo dei privilegi sul Memory Access. E' un difetto dell'esecuzione fuori ordine delle istruzioni.
Il processo semplificato di funzionamento di Meltdown si può riassumere così:
- Il malware che sfrutta Meltdown viene eseguito, a questo, come qualsiasi altro programma, viene allocato in memoria in uno
  spazio di indirizzamento virtuale, insieme al sistema operativo, il kernel e gli altri software. Questo processo è considerato
  sicuro per via del fatto che la MMU (Memory Management Unit) all'interno della CPU si occuperà di impedire ai processi
  di scrivere in aree di memoria non a lui dedicate.
- Quando un processo prova ad accedere ad un segmento riservato, l'istruzione viene salvata in pipeline, dove poi verrà 
  inviata all'elaborazione. Qui il l'indirizzo richiesto viene inviato all'MMU, per recuperare il dato a quell'indirizzo.
  Prima che l'istruzione venga completata, il controllo dei privilegi fallirà, generando un'eccezione e quindi passerà
  all'istruzione successiva.
- **Qui lo scheduler esegue due operazioni, controllo dei privilegi e passa l'istruzione all'unità specifica.**
  **L'unità di elaborazione attende il privilege check, ma nel frattempo richiede anche la lettura del dato, così**
  **nel caso che il privilege check sia positivo, il dato è già pronto alla lettura. In questo caso quindi i dati sono**
  **stati letti, ma il check fallirà, ma i dati saranno ancora sulla cache della CPU per il fatto che sono stati letti.**
  **Questo solitamente non comporta un problema dato che se il controllo fallisce i dati non sono accessibili**
- **INIZIO DI MELTDOWN**
  Adesso il dato non è leggibile, ma la cache della CPU è suscettibile ad un attacco temporizzato, così da permettere
  di scoprire se una specifica locazione di memoria è presente in cache. Questo solitamente non è un problema di sicurezza,
  ma grazie ad alcune particolarità dell'ISA di X86, Meltdown riesce ad avere accesso a tutta la memoria mappata dal kernel.

![Meltdown](assets/images/meltdown.png)

Il metodo di mitigazione di Meltdown è stato, per esempio su Windows, isolare la kernel e l'user mode page (Kernel & 
User-mode page-table isolation).

Meltdown colpisce solo CPU Intel.

### Spectre

Spectre invece è una falla che colpisce praticamente tutte le CPU in commercio che supportano l'esecuzione speculativa.
Anche Spectre, come Meltdown, trova le sue radici un difetto dell'esecuzione fuori ordine, il cui punto di partenza è
sempre una questione di tempi di accesso alla memoria. In pratica la CPU prova in certi casi a predire il risultato di
una operazione e quindi preparare i dati in caso di risultato positivo, in caso contrario, quel dato non deve essere 
accessibile. Questi dati salvati se richiesti di nuovo alla CPU, saranno già pronti per via dell'esecuzione precedente,
quindi il tempo di recupero di quel dato, anche se alla fine il controllo sarà errato, il recupero sarà più veloce.
Quindi questi cambiamenti, anche se non portano a nessun problema di sicurezza sul momento, dimostrano un cambiamento
di stato nel sistema, quindi possiamo dedurre dove era mappata quella locazione di memoria, e da questo desumere dati che
un programma malevolo non dovrebbero poter sapere, saltando i meccanismi di protezione di CPU ed MMU.

Esistono diverse versioni di Spectre, alcune riguardano la Speculative Store Bypass, altre, come la prima variante
il Bound Check Bypass e le sue sottovarianti il BCB Store e Read-only protection bypass. 

---

Queste falle non possono essere risolte con un aggiornamento software, l'unico modo è disabilitare le funzioni colpite,
questo però porta in una perdita di prestazioni più o meno grave (nel caso di Meltdown, in alcune situazioni come la
virtualizzazione è stato mostrato come in alcune situazioni il calo prestazionale arrivasse anche ad un 70% dove 
l'esecuzione speculativa era più usata).

---

## Le falle di architettura della CPU
Come ho appena scritto, le CPU possono essere soggetti, anche se in occasioni rarissime, di difetti di architettura. Questi
difetti portano a possibili problemi di sicurezza che non possono essere risolti, ma mitigati, disabilitando quella specifica
funzione della CPU. Questo perché essendo un problema hardware, per essere risolto serve una nuova serie di CPU, in cui 
quella funzione non è più vulnerabile a livello di Architettura
  
![stack](/assets/images/firewall.svg)