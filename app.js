const gameOfTheYear = [
    {
        game: "Halo Infinite",
        year: 2021,
        Developer: "343 Industries",
        score: 90
    },

    {
        game: "Back 4 Blood",
        year: 2021,
        Developer: "Turtle Rock",
        score: 83
    },

    {
        game: "Marvel's Guardians of the Galaxy",
        year: 2021,
        publisher: "Eidos Montreal",
        score: 87
    },

    {
        game: "Reisdent Evil Village",
        year: 2021,
        Developer: "Capcom",
        score: 93,
        winner: "Yes"
    }
]

const gameWinner = gameOfTheYear.filter(win => win.winner)
console.log(gameWinner)

const bestArtDirection = [
    {
        game: "Life is Strange: True Colors",
        year: 2021,
        Developer: "Deck Nine",
        Director: "Zak Garriss",
        Engine: "Unreal Engine 4"
    },

    {
        game: "DeathLoop",
        year: 2021,
        Developer: "Arkane Studios",
        Director: "Dinga Bakaba",
        Engine: "Void Engine",
        winner: "Yes"
    },

    {
        game: "Marvel's Guardians of the Galaxy",
        year: 2021,
        Developer: "Eidos Montreal",
        Director: "Jean-Francois Dugas, Patrick Fortier",
        Engine: "Dawn Engine "
    },

    {
        game: "Kena: Bridge of Spirits",
        year: 2021,
        Developer: "Ember Lab",
        Director: "Mike Grier",
        Engine: "Unreal Engine 4"
    },

]

const bestGameDirection = [
    {
        game: "It Take Two",
        Year: 2021,
        Developer: "Electronic Arts",
        Writer: "Soni Jorgeson, Josef Fares"
    },

    {
        game: "Metroid Dread",
        Year: 2021,
        Developer: "Nintendo",
        Writer: "Fumi Hayashi",
        Winner: "Yes"
    },

    {
        game: "Halo Infinite",
        Year: 2021,
        Developer: "343 Industries",
        Writer: "Paul Crocker"
    },

    {
        game: "Resident Evil Village",
        Year: 2021,
        Developer: "Capcom",
        Writer: "Antony Johnston"
    }
]

const mostAnticipated = [
    {
        game: "God of War Ragnarok",
        Year: 2022,
        Developer: "Santa Monica Studios",
        anticipationScore: 10,
        Winner: "Yes"
    },

    {
        game: "Horizon Forbidden West",
        Year: 2022,
        Developer: "Guerrilla Games",
        anticipationScore: 9
    },

    {
        game: "Dying Light 2 Stay Human",
        Year: 2022,
        Developer: "Techland",
        anticipationScore: 8.5
    },

    {
        game: "Suicide Squad: Kill The Justice League",
        Year: 2021,
        Developer: "Rocksteady Studios",
        anticipationScore: 7
    }
]

const bestMultiplayer = [
    {
        game: "Call of Duty Vanguard",
        Year: 2021,
        Developer: "Sledgehammer Games",
        Genre: "Shooter",
        Winner: "Yes"
    },

    {
        game: "Forza Horizon 5",
        Year: 2021,
        Developer: "Playground Games",
        Genre: "Racing"
    },

    {
        game: "Battlefield 2042",
        Year: 2021,
        Developer: "DICE",
        Genre: "Shooter"
    },

    {
        game: "Knockout City",
        Year: 2021,
        Developer: "Velan Studios",
        Genre: "Action"
    }
]

const bestRPG = [
    {
        game: "Pokemond Brilliant Diamond/Shining Pearl",
        Year: 2021,
        Developer: "Game Freak",
        Genre: "Role Playing",
        Score: 83

    },

    {
        game: "Disco Elysium: The Final Cut",
        Year: 2021,
        Developer: "ZA/UM",
        Genre: "Role Playing",
        Score: 90
    },

    {
        game: "Tales of Arise",
        Year: 2021,
        Developer: "Bandai Namco",
        Genre: "Action, Adventure, Role PLaying",
        Score: 92
    },

    {
        game: "OutRiders",
        Year: 2021,
        Developer: "People Can Fly",
        Genre: "Shooter, Role Playing",
        Score: 90
    }
]