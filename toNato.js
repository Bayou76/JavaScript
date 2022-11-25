const toNato = (str) => {
    let nato = {
       a: 'Alfa',
       b: 'Bravo',
       c: 'Charlie',
       d: 'Delta',
       e: 'Echo',
       f: 'Foxtrot',
       g: 'Golf',
       h: 'Hotel',
       i: 'India',
       j: 'Juliett',
       k: 'Kilo',
       l: 'Lima',
       m: 'Mike',
       n: 'November',
       o: 'Oscar',
       p: 'Papa',
       q: 'Quebec',
       r: 'Romeo',
       s: 'Sierra',
       t: 'Tango',
       u: 'Uniform',
       v: 'Victor',
       w: 'Whiskey',
       x: 'Xray',
       y: 'Yankee',
       z: 'Zulu'
    }
    let arr = [...str];
    return arr
    .filter((letter) => letter !== " ")
    .map((letter) => {
       if( /[^a-z]/.test(letter.toLowerCase()) ) { return letter }
       else { return nato[letter.toLowerCase()]; }
    }).join('');
 };

 module.exports = toNato;