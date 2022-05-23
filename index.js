const cats = ['Milo',"Otis","Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const moreCats = [...cats, "Broom"]
    return moreCats
}

function prependCat(name) {
    const moreCats = ["Arnold",...cats]
    return moreCats
}

function removeLastCat() {
    const lessCats = cats.slice(0,2)
    return lessCats
}

function removeFirstCat() {
    const lessCats = cats.slice(1)
    return lessCats
}