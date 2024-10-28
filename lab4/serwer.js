const fs = require('fs');
const events = require('events');
const util = require('util');

// Konstruktor klasy Watcher
function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}

// Dziedziczenie po EventEmitter
util.inherits(Watcher, events.EventEmitter);

// Metoda do monitorowania katalogu
Watcher.prototype.watch = function() {
  const watcher = this;
  fs.readdir(this.watchDir, function(err, files) {
    if (err) throw err;
    for (let index in files) {
      watcher.emit('process', files[index]);
    }
  });
};

// Metoda do uruchamiania monitorowania
Watcher.prototype.start = function() {
  const watcher = this;
  fs.watchFile(this.watchDir, function() {
    watcher.watch();
  });
};

// Tworzenie instancji Watcher
const watchDir = './watch';
const processedDir = './done';
const watcher = new Watcher(watchDir, processedDir);

// Reagowanie na zdarzenie 'process'
watcher.on('process', function(file) {
  const watchFile = `${this.watchDir}/${file}`;
  const processedFile = `${this.processedDir}/${file.toLowerCase()}`;
  fs.rename(watchFile, processedFile, function(err) {
    if (err) throw err;
    console.log(`Przeniesiono: ${watchFile} do ${processedFile}`);
  });
});

// Rozpoczęcie monitorowania
watcher.start();
console.log(`Monitoring katalogu: ${watchDir}`);
