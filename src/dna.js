const R = require('ramda')

const dna_strand = ['T', 'A', 'C', 'A', 'A', 'A', 'A', 'G', 'A', 'A', 'A', 'T', 'A', 'C', 'T']
const nucleotides = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A'
}
const proteins = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP'
}
const protToNuc = {
    'Adenine': 'A',
    'Cytosine': 'C',
    'Guanine': 'G',
    'Thymine': 'T'
}

// DNA to RNA
const dnaToRna = (dna) => {
    let rna_strand = dna.map(nuc => nucleotides[nuc])

    return rna_strand.join('')
}

dnaToRna(dna_strand)

// RNA to Proteins
const rnaToProteins = (rna) => {
    rna = rna.split('')
    let prot_chain = []
    
    let codons = R.range(0, rna.length / 3).map(val =>
        rna.splice(0, 3).join('')
    )

    for (let codon in codons) {
        let cod = codons[codon]
        
        if (proteins[cod] !== 'STOP') {
            prot_chain.push(proteins[cod])
        } else {
            break
        }
    }

    return prot_chain
}

rnaToProteins(dnaToRna(dna_strand))

// Count Nucleotides
const count = (n, arr) => {
    return arr.reduce((acc, current) =>
        current === n ? acc + current : acc
    , '').length
}

const displayCount = (p, c) => {
    return `${p} occurs ${c} times`
}

const countNucleotides = (dna) => {
    return R.keys(protToNuc).map(i =>
        displayCount(i, count(protToNuc[i], dna))
    )
}

countNucleotides(dna_strand)
