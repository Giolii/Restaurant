export default function home() {
    const mainPage = document.createElement('div');
    mainPage.classList.add('homePage')
    mainPage.innerHTML = `
    <h1 class="my-restaurant">My Restaurant</h1>
        <img class="main-pic" src="https://panoramicrestaurant.com/wp-content/uploads/2023/07/2TH08812-1-scaled.jpg" alt="Main room of a restaurant">
        <div class="container-head-img">
            <img src="https://cdn.vox-cdn.com/thumbor/Dfg4c7kTQMRGfJtyxrV8QarcHqE=/0x0:978x612/1200x900/filters:focal(411x228:567x384)/cdn.vox-cdn.com/uploads/chorus_image/image/62994272/Screen_Shot_2018_11_05_at_12.57.46_PM.6.png" alt="">
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg" alt="">
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/FN_chain-restaurant-entrees_Applebees_Bourbon-Street-Chicken-Shrimp_s6x4.jpg.rend.hgtvcom.1280.1280.suffix/1538685780055.jpeg" alt="">
            <img src="https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png" alt="">
        </div>
        <div class="description-restaurant">Ci Siamo bridges the traditional with the contemporary, bringing live-fire cooking, housemade pasta, and a robust Italian wine list to the heart of Manhattan West. Soft lighting, comfortable seating with elbow room, an attentive staff, great service, a distinctive, well-thought-out menu, a traditional bar, a good wine menu, and soft background music. And now comes the hard part, having a good head chef that runs the back of the house expertly, efficiently, and takes pride in the food being served</div>
    `; 
    return mainPage;
  }