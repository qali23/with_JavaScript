

function yzma_change(x){
    x.src = "../Images/its_dinner_time.gif";
    x.style.height = "200px";
    x.style.width = "auto";
}

function yzma_change_back(x){
    x.src = "../Images/how_shall_I_do_it.gif";
    x.style.height = "200px";
    x.style.width = "auto";
}

const image = document.getElementById("yzma");
image.addEventListener('mouseover', () => yzma_change(image));
image.addEventListener('mouseout',  () => yzma_change_back(image));

function add_Kronk(){
    event.preventDefault();
    let dish_name = document.getElementById("fname").value;
    let dish_recipe = document.getElementById("lname").value;

    let dish_title = document.createElement('h2');
    let dish_image = document.createElement('img');
    let dish_contents = document.createElement('ul');
    let dish_article = document.createElement("article");

    dish_title.textContent = dish_name;
    dish_contents.textContent = dish_recipe;
    dish_image.src = "../Images/oh_yeah_its_all_coming_together.gif";
    dish_image.alt = "an image";

    let output_place = document.getElementById("all-recipes");
    let output_article = document.createElement('article');

    dish_article.id = dish_name;
    dish_article.className = "recipe";
    dish_article.appendChild(dish_title);
    dish_article.appendChild(dish_image);
    dish_article.appendChild(dish_contents);

    output_place.appendChild(dish_article);

    let new_button = document.createElement("a");
    new_button.href = "#" + dish_name;
    new_button.textContent = dish_name;

    let button_place = document.getElementById("dish_names");
    button_place.appendChild(new_button);

}

const button = document.getElementById("submit_button");
button.addEventListener('click', () => add_Kronk());




