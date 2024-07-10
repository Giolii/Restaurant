export default function menu() {
    const menu = document.createElement('div');
    menu.classList.add('menuPage')
    menu.innerHTML = `
<div class='menuItem'>
<img class="imgRecipe" src="https://pamelasalzman.com/wp-content/uploads/2011/08/L1140150.jpg" alt="pasta plate">
    <div>
        CAPELLINI ALLA CHECCA
        $20.95
    </div>
    <div>ANGEL HAIR PASTA WITH FRESH TOMATO, GARLIC & BASIL</div>
</div>
<div class='menuItem'>
<img class="imgRecipe" src="https://finefoodsblog.com/wp-content/uploads/2021/03/penne-allArrabbiata-1200.jpg" alt="pasta plate">
    <div>
        PENNE ARRABBIATA
        $21.95
    </div>
    <div>PENNE PASTA WITH A LIGHT SPICY TOMATO GARLIC SAUCE</div>
</div>
<div class='menuItem'>
<img class="imgRecipe" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-bolognese-1130fa2.jpg?quality=90&resize=440,400" alt="pasta plate">
    <div>
        SPAGHETTI BOLOGNESE
        $23.95
    </div>
    <div>SPAGHETTI AND BEEF RAGU</div>
</div>

<div class='menuItem'>
<img class="imgRecipe" src="https://cravingcalifornia.com/wp-content/uploads/2022/07/Bucatini-Cacio-e-Pepe-5902-500x500.jpg" alt="pasta plate">
    <div>
        SPAGHETTI CACIO E PEPE
        $23.95
    </div>
    <div>SPAGHETTI, ROMANO CHEESE, BLACK PEPPER</div>
</div>`
    return menu;
  }
