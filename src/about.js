export default function about() {
    const mainPage = document.createElement('div');
    mainPage.classList.add('aboutPage')
    mainPage.innerHTML = `
    <img class='aboutImg' src="https://www.viaalloro.com/wp-content/uploads/2018/04/ViaAlloroSolid-1024x551.png" alt="via alloro logo">
    <div class='aboutDescription'>    
        Twenty years ago the Drago family name was introduced to the Los Angeles restaurant scene and has been a staple ever since. Renowned chef/restaurateur, Giacomino Drago owns eight restaurants collectively, all very successful including Il Pastaio and Piccolo Paradiso in Beverly Hills.
        Now Giacomino is collaborating with brother Tanino on their newest venture with a fresh new look and feel named Via Alloro located at 301 Canon Drive on the corner of Dayton Way in Beverly Hills. The restaurant opened its doors in January 2009.
    </div>`
    return mainPage;
  }