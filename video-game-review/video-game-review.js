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
    },
    {
        title: "Titanfall 2",
        author: "Respawn Entertainment",
        Image: "images/titanfall-2.jpg",
        genre: "FPS",
        rating: 5,
        review: "A thrilling first-person shooter that combines fast-paced infantry combat with giant mech battles, delivering an exhilarating multiplayer experience.",
        longReview: "Titanfall 2 offers a unique blend of traditional FPS gameplay with the addition of Titans, massive mechs that players can pilot. The game's single-player campaign is well-crafted, featuring innovative level design and a compelling story. The multiplayer mode is dynamic and fast-paced, encouraging players to master both on-foot combat and Titan warfare. With its fluid movement system and diverse gameplay options, Titanfall 2 stands out as one of the best shooters in recent years."
    },
    {
        title: "Hades",
        author: "Supergiant Games",
        Image: "images/hades.jpg",
        genre: "Roguelike",
        rating: 4,
        review: "An action-packed roguelike that combines fast-paced combat with a rich narrative set in the world of Greek mythology.",
        longReview: "Hades captivates players with its engaging gameplay and compelling story. As Zagreus, the son of Hades, players must fight their way out of the Underworld using a variety of weapons and abilities. The game's roguelike mechanics ensure that each run feels fresh and exciting, while the deep narrative and character interactions add emotional depth to the experience. With its stunning art style and dynamic soundtrack, Hades is a standout title in the roguelike genre."
    },
    {
        title: "R.E.P.O",
        author: "Glitch Factory",
        Image: "images/repo.jpg",
        genre: "Horror Puzzle",
        rating: 4,
        review: "A gripping horror adventure that immerses players in a dystopian world filled with tension, mystery, and survival challenges.",
        longReview: "R.E.P.O delivers a chilling experience through its atmospheric storytelling and immersive gameplay. Players navigate a dystopian setting where they must make strategic decisions to survive against various threats. The game's narrative is rich with lore, and the tension is heightened by its eerie sound design and visual style. R.E.P.O stands out as a must-play for fans of horror and adventure games."
    }
];

// ---------------------------
// Display Top Rated Games
// ---------------------------
function showTopRated() {
    const topRatedDiv = document.getElementById("top-rated");
    if (!topRatedDiv) return;

    const topGames = videoGames.filter(game => game.rating === 5);
    topRatedDiv.innerHTML = topGames.map(game => renderCard(game, 'h4')).join("");
}

// ---------------------------
// Display All Reviews
// ---------------------------
function showAllReviews() {
    const reviewDiv = document.getElementById("game-review");
    if (!reviewDiv) return;
    reviewDiv.innerHTML = videoGames.map(game => renderCard(game, 'h3')).join("");
}

// ---------------------------
// Filter by Genre
// ---------------------------
function setupGenreFilter() {
    // Prefer the explicit id for the filter so we only pick up the intended select
    const select = document.getElementById("genreFilter");
    if (!select) return; // nothing to wire up on this page

    // The filter might be intended to update either the top-rated block (index)
    // or the full reviews block (page2). Choose whichever exists on the page.
    const topRatedDiv = document.getElementById("top-rated");
    const gameReviewDiv = document.getElementById("game-review");
    const targetDiv = topRatedDiv || gameReviewDiv;
    if (!targetDiv) return;

    select.addEventListener("change", function() {
        const selectedGenre = select.value;
        const filteredGames = videoGames.filter(game => 
            game.genre.toLowerCase().includes(selectedGenre.toLowerCase())
        );

        // Use renderCard to produce the flip-card for both containers
        if (targetDiv.id === "top-rated") {
            targetDiv.innerHTML = filteredGames.map(game => renderCard(game, 'h4')).join("");
        } else {
            targetDiv.innerHTML = filteredGames.map(game => renderCard(game, 'h3')).join("");
        }
    });
}

// Helper: render a flip card. headingTag is 'h3' or 'h4' for sizing consistency
function renderCard(game, headingTag = 'h3') {
    // ensure safe HTML for values if needed; for this small project we'll trust contents
    return `
        <div class="game-card" tabindex="0">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${game.Image}" alt="${game.title} cover" class="game-img">
                    <${headingTag}>${game.title}</${headingTag}>
                    <p><strong>By:</strong> ${game.author}</p>
                    <p><strong>Genre:</strong> ${game.genre}</p>
                    <p><strong>Rating:</strong> ⭐ ${game.rating}</p>
                    <p class="short-review">${game.review}</p>
                </div>
                <div class="card-back">
                    <${headingTag}>${game.title}</${headingTag}>
                    <p><strong>By:</strong> ${game.author}</p>
                    <p><strong>Genre:</strong> ${game.genre}</p>
                    <p><strong>Rating:</strong> ⭐ ${game.rating}</p>
                    <p class="long-review">${game.longReview}</p>
                </div>
            </div>
        </div>
    `;
}

// ---------------------------
// Initialize Everything
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    showTopRated();
    showAllReviews();
    setupGenreFilter();
});
