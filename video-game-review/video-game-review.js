const videoGames = [
    {
        title: "Elden Ring",
        author: "FromSoftware",
        Image: "images/elden-ring.jpg",
        genre: "RPG",
        rating: 5,
        review: "An expansive open-world RPG that redefines the genre with its intricate lore, challenging gameplay, and breathtaking visuals.",
        longReview: "Elden Ring offers players a vast and immersive world to explore, filled with rich storytelling and complex characters. The game's combat system is both challenging and rewarding, requiring strategic thinking and skillful execution. With its stunning graphics and atmospheric soundtrack, Elden Ring sets a new standard for open-world RPGs."
    },
    {
        title: "Stardew Valley",
        author: "ConcernedApe",
        Image: "images/stardew-valley.jpg",
        genre: "Farming Simulator",
        rating: 5,
        review: "A charming farming simulator that offers a relaxing yet engaging experience with deep customization, community interaction, and endless activities.",
        longReview: "Stardew Valley captivates players with its pixel-art style and soothing gameplay. The game allows players to cultivate their own farm, build relationships with townsfolk, and explore various activities such as fishing, mining, and crafting. The depth of customization and the freedom to play at one's own pace make Stardew Valley a beloved title among gamers of all ages."
    },
    {
        title: "Balatro",
        author: "LocalThunk",
        Image: "images/balatro.jpg",
        genre: "Roguelike",
        rating: 5,
        review: "A poker roguelike that combines strategic card play with dungeon crawling, offering a unique and addictive gameplay experience.",
        longReview: "Balatro stands out in the roguelike genre by integrating poker mechanics into its gameplay. Players must carefully manage their hand of cards while navigating procedurally generated dungeons filled with enemies and treasures. The game's blend of strategy, luck, and exploration creates a compelling experience that keeps players coming back for more."
    },
    {
        title: "Call of Duty",
        author: "Activision",
        Image: "images/call-of-duty.jpg",
        genre: "FPS",
        rating: 4,
        review: "A fast-paced first-person shooter that delivers intense multiplayer action and a gripping single-player campaign.",
        longReview: "Call of Duty continues to be a staple in the FPS genre, offering players a variety of game modes that cater to different playstyles. The multiplayer experience is highly competitive, with a wide range of weapons and customization options. The single-player campaign is cinematic and engaging, providing a thrilling narrative that keeps players on the edge of their seats."
    },
    {
        title: "Little Nightmares",
        author: "Tarsier Studios",
        Image: "images/little-nightmares.jpg",
        genre: "Horror Puzzle",
        rating: 4,
        review: "A dark and atmospheric puzzle-platformer that immerses players in a haunting world filled with eerie creatures and challenging puzzles.",
        longReview: "Little Nightmares excels in creating a tense and unsettling atmosphere through its art design and soundscape. Players take on the role of a small child navigating through a world inhabited by grotesque beings, solving puzzles and avoiding dangers along the way. The game's unique visual style and compelling narrative make it a memorable experience for fans of horror and puzzle games."
    }
];

// ---------------------------
// Display Top Rated Games
// ---------------------------
function showTopRated() {
    const topRatedDiv = document.getElementById("top-rated");
    if (!topRatedDiv) return;

    const topGames = videoGames.filter(game => game.rating === 5);
    topRatedDiv.innerHTML = topGames.map(game => `
        <div class="game-card">
            <img src="${game.Image}" alt="${game.title} cover" class="game-img">
            <h4>${game.title}</h4>
            <p><strong>Genre:</strong> ${game.genre}</p>
            <p><strong>Rating:</strong> ⭐ ${game.rating}</p>
            <p>${game.review}</p>
        </div>
    `).join("");
}

// ---------------------------
// Display All Reviews
// ---------------------------
function showAllReviews() {
    const reviewDiv = document.getElementById("game-review");
    if (!reviewDiv) return;

    reviewDiv.innerHTML = videoGames.map(game => `
        <div class="game-card">
            <img src="${game.Image}" alt="${game.title} cover" class="game-img">
            <h3>${game.title}</h3>
            <p><strong>By:</strong> ${game.author}</p>
            <p><strong>Genre:</strong> ${game.genre}</p>
            <p><strong>Rating:</strong> ⭐ ${game.rating}</p>
            <p>${game.longReview}</p>
        </div>
    `).join("");
}

// ---------------------------
// Filter by Genre
// ---------------------------
function setupGenreFilter() {
    const select = document.querySelector("select");
    const topRatedDiv = document.getElementById("top-rated");
    if (!select || !topRatedDiv) return;

    select.addEventListener("change", function() {
        const selectedGenre = select.value;
        const filteredGames = videoGames.filter(game => 
            game.genre.toLowerCase().includes(selectedGenre.toLowerCase())
        );

        topRatedDiv.innerHTML = filteredGames.map(game => `
            <div class="game-card">
                <img src="${game.Image}" alt="${game.title} cover" class="game-img">
                <h4>${game.title}</h4>
                <p><strong>Genre:</strong> ${game.genre}</p>
                <p><strong>Rating:</strong> ⭐ ${game.rating}</p>
                <p>${game.review}</p>
            </div>
        `).join("");
    });
}

// ---------------------------
// Initialize Everything
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    showTopRated();
    showAllReviews();
    setupGenreFilter();
});
