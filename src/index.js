module.exports = function toReadable (n) {
    let res = ''
    if (n < 0) return 'error';
    if (Math.trunc(n / 100) > 0) {
        switch (Math.trunc(n / 100)) {
            case 1: {
                res = 'one hundred'
                break
            }
            case 2: {
                res = 'two hundred'
                break
            }
            case 3: {
                res = 'three hundred'
                break
            }
            case 4: {
                res = 'four hundred'
                break
            }
            case 5: {
                res = 'five hundred'
                break
            }
            case 6: {
                res = 'six hundred'
                break
            }
            case 7: {
                res = 'seven hundred'
                break
            }
            case 8: {
                res = 'eight hundred'
                break
            }
            case 9: {
                res = 'nine hundred'
                break
            }
        }
        if (n % 100 !== 0) {
            res += ' '
        }
        n = n - (Math.trunc(n / 100)*100)
        
    }
    if (Math.trunc(n / 10) > 0) {
        switch (Math.trunc(n / 10)) {
            case 9: {
                res = res + 'ninety'
                break
            }
            case 8: {
                res = res + 'eighty'
                break
            }
            case 7: {
                res = res + 'seventy'
                break
            }
            case 6: {
                res = res + 'sixty'
                break
            }
            case 5: {
                res = res + 'fifty'
                break
            }
            case 4: {
                res = res + 'forty'
                break
            }
            case 3: {
                res = res + 'thirty'
                break
            }
            case 2: {
                res = res + 'twenty'
                break
            }
            case 1: {
                switch (n) {
                    case 19: {
                        res = res + 'nineteen'
                        return res
                    }
                    case 18: {
                        res = res + 'eighteen'
                        return res
                    }
                    case 17: {
                        res = res + 'seventeen'
                        return res
                    }
                    case 16: {
                        res = res + 'sixteen'
                        return res
                    }
                    case 15: {
                        res = res + 'fifteen'
                        return res
                    }
                    case 14: {
                        res = res + 'fourteen'
                        return res
                    }
                    case 13: {
                        res = res + 'thirteen'
                        return res
                    }
                    case 12: {
                        res = res + 'twelve'
                        return res
                    }
                    case 11: {
                        res = res + 'eleven'
                        return res
                    }
                    case 10: {
                        res = res + 'ten'
                        return res
                    }
                }
                break
            }
        }
        if (n % 10 > 0) res += ' '
        
        n = n - (Math.trunc(n / 10)*10)
        
    }
    if (n === 0 && res.length !== 0) return res;
    switch (n) {
        case 0: {
            res += 'zero'
            break
        }
        case 1: {
            res += 'one'
            break
        }
        case 2: {
            res += 'two'
            break
        }
        case 3: {
            res += 'three'
            break
        }
        case 4: {
            res += 'four'
            break
        }
        case 5: {
            res += 'five'
            break
        }
        case 6: {
            res += 'six'
            break
        }
        case 7: {
            res += 'seven'
            break
        }
        case 8: {
            res += 'eight'
            break
        }
        case 9: {
            res += 'nine'
            break
        }
    }
    return res
}
