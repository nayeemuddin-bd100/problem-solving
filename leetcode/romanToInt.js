/**
 * 
 *  I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000 
 */

    var romanToInt = function(s) {
        let roman = {
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000, 
            'IV':4,
            'IX':9,
            'XL':40,
            'XC':90,
            'CD':400,
            'CM':900
        }
        let textArr = s.split('')
        let total = 0
        textArr.map((v) => {
            total += roman.v
        })
    
    };
    

    console.log(romanToInt('III'));






    // var romanToInt = function(s) {
    //     let roman = {
    //         'I':1,
    //         'V':5,
    //         'X':10,
    //         'L':50,
    //         'C':100,
    //         'D':500,
    //         'M':1000, 
    //         'IV':4,
    //         'IX':9,
    //         'XL':40,
    //         'XC':90,
    //         'CD':400,
    //         'CM':900
    //     }
    //     let textArr = s.split('')
    //     let doubleRoman = []
        
    //     for(let i = 0; i < textArr.length-1;i++){
            
    //         for(let j = i+1 ; j <= i+1; j++){
                
    //            if(textArr[i].concat(textArr[j]) == 'IV'){
    //                 doubleRoman.push('IV')
    //            }else if(textArr[i].concat(textArr[j]) == 'IX'){
    //                 doubleRoman.push('IX')
    //            }
    //            else if(textArr[i].concat(textArr[j]) == 'XL'){
    //                 doubleRoman.push('XL')
    //            }
    //            else if(textArr[i].concat(textArr[j]) == 'XC'){
    //                 doubleRoman.push('XC')
    //            }
    //            else if(textArr[i].concat(textArr[j]) == 'CD'){
    //                 doubleRoman.push('CD')
    //            }
    //            else if(textArr[i].concat(textArr[j]) == 'CM'){
    //                 doubleRoman.push('CM')
    //            }
    //         }
            
    //     }
    //     return doubleRoman;
    // };
    
    // // console.log(romanToInt('MCMXCIV'));
    // console.log(romanToInt('MCMXCIV'));
    // console.log(romanToInt("MCMXCIV"));
    // console.log(romanToInt("MCMXCIV"));
    /**
     * 'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000, 
         1000+100+1000+10+100+1+5   
     */
    
    
    // let text = 'abcdefgh'
    // for(let i = 0 ; i <= text.length ; i++){
    //     console.log(text.split(' '));
    // }
    // const str = 'one.two three.four';
    // const split4 = str.replaceAll('.', '$').replaceAll(' ', '$').split('$')
    // console.log(split4);
    