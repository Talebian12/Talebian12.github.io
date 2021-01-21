---
layout: page
title: Files
permalink: /
---

# I Files

Un file è un contenitore di dati, una **struttura astratta** rispetto al dato puro (raw) su disco. Si dice che il file è una astrazione
perché noi sul supporto di memoria non abbiamo dei file, ma una _sequenza di byte_, quindi dei dati i quali non hanno in realtà
l'aspetto di quel che noi consideriamo file, ma il file è una astrazione, un concetto più vicino all'utente, che ci dà il _filesystem e
il sistema operativo_.

![astrazione](/assets/images/abstraction_file.svg)

## Caratteristiche
Il filesystem gestisce le varie proprietà di un file tramite un sistema di permessi, per esempio, i sistemi unix gestiscono i permessi in
questo modo:
- Per categoria: _User, Group, Other_
  quindi il singolo utente proprietario del file potrà avere determinati permessi per quel file, il gruppo di cui fa parte quel file avrà
  determinati permessi e tutti gli altri (other) avranno altri permessi specifici.
- Per permesso: _Readable, Writable, Executable_
  quindi per ogni categoria di proprietari possiamo definire i **permessi di lettura** (visione e copia di un file), i **permessi di scrittura** (
  modifica, rinomina, spostamento ed eliminazione di un file) e **di esecuzione** (se possibile, questo per eseguibili o scripts).

![permessi](/assets/images/permissions.svg)

I files possono avere varie caratteristiche:
- Possono essere **scrivibili**, quindi si può creare e scrivere su un file.
- Possono essere **modificabili**, quindi dopo la scrittura, la sua struttura può essere modificata.
- Possono essere **leggibili**, quindi il file possono essere successivamente letti
- Possono essere **sovrascrivibili**, quindi possiamo sostituire il file con altri dati, o sostituirlo con dati nulli (eliminazione)
- Possono essere **eseguiti**, questo se il file è un eseguibile e quindi ha le caratteristiche per essere interpretato ed eseguito dalla CPU.