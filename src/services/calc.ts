import { DIVISION, MULTIPLICATION, SQRT, SUBTRACTION, SUMMATION } from "./data/constants";

const CONSTANTS = {
    brackets: ['(', ')'],
    addSymbol: SUMMATION,
    minusSymbol: SUBTRACTION,
    multiSymbol: '*', // MULTIPLICATION
    divSymbol: DIVISION,
    negativeSymbol: 'n',
    get getOperation () { return [this.multiSymbol, this.divSymbol, this.addSymbol, this.minusSymbol] },
  }

  const {brackets, addSymbol, minusSymbol, multiSymbol, divSymbol, negativeSymbol} = CONSTANTS;
  const [openBracket, closeBracket] = brackets;

  export var calc = function (expression: string) {    
    let expr = `${expression}`
    expr = removeSpaces(expr)
    expr = replaceIncorrectSymbol(expr)
    expr = removeKeyWords(expr)
    const sub = CONSTANTS.minusSymbol
    const negativeSymbol = CONSTANTS.negativeSymbol

    console.log(expr)
  
    checkPairOfBrackets(expr)
  
    while (!isExprHasOperation(expr)) {
      expr = stepByStepCalcExpr(expr)
    }
  
    if (typeof (expr) === 'string') expr = expr.replace(negativeSymbol, sub)
  
    const res = parseFloat(expr);
    return replaceDotToComma(String(res))
  }
  
  function stepByStepCalcExpr (expr: string) {
    const [openBracket, closeBracket] = CONSTANTS.brackets
    let newExpr = ''
    let noBracketsExp = ''
    let isBracket = true
  
    for (let i = 0; i < expr.length; i++) {
      if (expr.charAt(i) === openBracket) {
        newExpr = newExpr + noBracketsExp + expr.charAt(i)
        noBracketsExp = ''
      }
  
      isBracket = [openBracket, closeBracket].indexOf(expr[i]) > -1
      if (!isBracket) noBracketsExp = noBracketsExp + expr.charAt(i)
  
      if (expr.charAt(i) === closeBracket) {
        const countSqrt = Math.sqrt(parseFloat(countSimpleExpr(noBracketsExp)))
        newExpr = newExpr.slice(0, -1) + countSqrt + expr.slice(i + 1)
        noBracketsExp = ''
        return newExpr
      }
  
      const isExprHasNotBrackets = i === expr.length - 1
      if (isExprHasNotBrackets) newExpr = countSimpleExpr(noBracketsExp)
    }
  
    return newExpr
  }
  
  function countSimpleExpr (noBracketsExp: string) {
    let res = ''
  
    const exprArr = normalizeStrExpr(noBracketsExp).split(' ').filter((el: string) => el !== '')
  
    while (exprArr.indexOf(divSymbol) > -1) {
      const index = exprArr.indexOf(divSymbol)
      const prevItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index - 1]))
      const nextItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index + 1]))
      if (nextItem === 0) throw new Error('TypeError: Division by zero.')
      const res = String(prevItem / nextItem);
      exprArr.splice(index - 1, 3, res)
      if (isNaN(prevItem) || isNaN(nextItem)) break
    }
  
    while (exprArr.indexOf(multiSymbol) > -1) {
      const index = exprArr.indexOf(multiSymbol)
      const prevItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index - 1]))
      const nextItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index + 1]))
      const res = String(prevItem * nextItem)
      exprArr.splice(index - 1, 3, res)
      if (isNaN(prevItem) || isNaN(nextItem)) break
    }
  
    while (exprArr.indexOf(minusSymbol) > -1) {
      const index = exprArr.indexOf(minusSymbol)
      const prevItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index - 1]))
      const nextItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index + 1]))
      if (prevItem) {
        const res = String(prevItem - nextItem)
        exprArr.splice(index - 1, 3, res)
      } else {
        const res = String(-nextItem)
        exprArr.splice(index, 2, res)
      }
  
      if (isNaN(prevItem) || isNaN(nextItem)) break
    }
  
    while (exprArr.indexOf(addSymbol) > -1) {
      const index = exprArr.indexOf(addSymbol)
      const prevItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index - 1]))
      const nextItem = parseFloat(mayBeNegativeSymbolToMinus(exprArr[index + 1]))
      if (prevItem || prevItem === 0) {
        const res = prevItem + nextItem
        exprArr.splice(index - 1, 3, String(res))
      } else {
        const res = nextItem
        exprArr.splice(index, 2, String(res))
      }
      if (isNaN(prevItem) || isNaN(nextItem)) break
    }
  
    [res] = exprArr
    console.log(res);
    return (parseFloat(res) < 0) ? `${negativeSymbol}${-res}` : res
  }
  
  function mayBeNegativeSymbolToMinus (mayNegative: string) {
    if (typeof (mayNegative) === 'string') mayNegative = mayNegative.replace(negativeSymbol, minusSymbol)
  
    return mayNegative
  }
  
  function checkPairOfBrackets (expr: string) {
    const isCountBracketsEqual = expr.split(openBracket).length === expr.split(closeBracket).length
    if (!isCountBracketsEqual) throw new Error('ExpressionError: Brackets must be paired')
  }
  
  function isExprHasOperation (expr: string) {
    return ![...CONSTANTS.getOperation, ...CONSTANTS.brackets].some(item => (String(expr).indexOf(item) > -1))
  }
  
  function normalizeStrExpr (expr: string) {
    const cleanExpr = cleanGarbageStrExpr(expr)
    const calcNegativeSymbol = cleanExpr.replace(/--/g, '+').replace(/-n/g, '+').replace(/nn/g, '+').replace(/\++/g, '+')
    const replaceNegativeOperation = calcNegativeSymbol.replace(/\*-/g, '*n').split('/-').join('/n').split('/+').join('/')
    const normExpr = replaceNegativeOperation.replace(/\+/g, ' + ').replace(/-/g, ' - ').replace(/\*/g, ' * ').replace(/[/)]/g, ' / ')
    return normExpr
  }
  
  function cleanGarbageStrExpr (expr: string) {
    const cleanExpr = removeSpaces(expr).replace(/[\\()]/g, '')
    return cleanExpr
  }
  
  function removeSpaces (expr: string) {
    return expr.replace(/\s/g, '')
  }

  function removeKeyWords (expr: string) {
    return expr.split(SQRT).join('');
  }

  function replaceIncorrectSymbol (expr: string) {
    return expr.replace(/\x/g, '*').replace(/\,/g, '.')
  }
  function replaceDotToComma (expr: string) {
    return expr.replace(/\./g, ',')
  }