let phoneBook = new Map();

phoneBook.set('dimitar', '094524142');
phoneBook.set('nadejda', '104124142');
phoneBook.set('elica', '046724142');
phoneBook.set('angel', '048924142');
phoneBook.set('sofia', '097424142');

let phoneBookEntries = Array.from(phoneBook.entries());

phoneBookEntries.sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]))