// 1-st task - Find the longest "0" sequence
// 2-nd task - Arrange the sequences of 1s and 0s in accending order to a new array, alternating 1s and 0s

const sequencesArr = [
    '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0',
    '1', '1', '1', '1', '1', '1', '1',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '1', '1', '1', '1',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '1', '1', '1',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '1', '1', '1', '1', '1', '1',
    '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '1', '1',
    '0', '0', '0', '0', '0', '0', '0',
    '1', '1', '1', '1', '1', '1', '1', '1',
    '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'
]

// 1-st task - solution
const findLongestSeq = (arr) => {
    let start = 0
    let currentSeqLength = 0
    let longestSeqLength = 0
    
    arr.forEach((el, i) => {
        if (el === '0') {
            currentSeqLength++
            if (currentSeqLength > longestSeqLength) {
                start = i - currentSeqLength + 1
                longestSeqLength = currentSeqLength
            }
        } else {
            currentSeqLength = 0
        }
    })

    return `The longest "0" sequence starts at index ${start}
            with its total length of ${longestSeqLength}`
}

findLongestSeq(sequencesArr)

// 2-nd task - solution
const separateSeq = (arr, separator) => {
    return arr.join('').split(separator)
        .sort().filter(i => i !== '')
}

const mergeSeq = (a, b) => {
    let merged = []
    const length = Math.max(a.length, b.length)
    
    for (let i = 0; i < length; i++) {
        i < a.length && merged.push(a[i])
        i < b.length && merged.push(b[i])
    }

    return merged.join('').split('')
}

const ones = separateSeq(sequencesArr, '0')
const zeros = separateSeq(sequencesArr, '1')

mergeSeq(ones, zeros)