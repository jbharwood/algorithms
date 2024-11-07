

// Write a code to maintain sports tournament leaderboard based on medals won?

// Country - Num Medals
// Country Bronze Silver Gold Total
// USA B1 S2 G3 6
// Sorted by most golds, then checks silver, bronze

// Leaderboard class
// add medal

// [{country: "USA", bronze: 0, silver: 0, gold: 0, total: 0}]
// addMedal
// sortLeaderboard

//time: O(n log n)
//space: O(1)

const leaderboard = [
    {country: "USA", bronze: 0, silver: 0, gold: 0, total: 0},
    {country: "China", bronze: 0, silver: 0, gold: 0, total: 0},
]

function displayLeaderboard() {
    return leaderboard
}

function addMedals(leaderboardItem) {
    const { country, bronze, silver, gold } = leaderboardItem
    
    if (!country || !bronze || !silver || !gold) {
        return "Incorrect leaderboardItem"
    }
    
    let res
    
    for (let i = 0; i < leaderboard.length; i++) {
        if (leaderboard[i].country === country) {
            if (bronze) {
                leaderboard[i].bronze += bronze
                leaderboard[i].total += bronze
            }
            
            if (silver) {
                leaderboard[i].silver += silver
                leaderboard[i].total += silver
            }
            
            if (gold) {
                leaderboard[i].gold += gold
                leaderboard[i].total += gold
            }
            
            res = leaderboard[i]
        }
    }
    
    if (res === null) {
        return "Country not found"
    } else {
        sortLeaderboard()
    }
    
    return res
}

function sortLeaderboard() {    
    return leaderboard.sort((a, b) => {
        if (a.gold === b.gold) {
            if (a.silver !== b.silver) {
                return b.silver - a.silver
            } else {
                return b.bronze - a.bronze
            }
        } else {
            return b.gold - a.gold
        }
    })
}

console.log(addMedals({country: "USA", bronze: 1, silver: 3, gold: 3}))
console.log(addMedals({country: "China", bronze: 2, silver: 3, gold: 3}))
console.log("sorted", displayLeaderboard())


