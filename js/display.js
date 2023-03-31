let click_count_one = 0;
let click_count_two = 0;
let click_count_three = 0;
let click_count_string_one = ``;
let click_count_string_two = ``;
let click_count_string_three = ``;


if(Cookies.get(`click_count_one`) !== undefined)
{
    click_count_string_one = Cookies.get(`click_count_one`);
    click_count_one = JSON.parse(click_count_string_one);

}

if(Cookies.get(`click_count_two`) !== undefined)
{
    click_count_string_two = Cookies.get(`click_count_two`);
    click_count_two = JSON.parse(click_count_string_two);
}

if(Cookies.get(`click_count_three`) !== undefined)
{
    click_count_string_three = Cookies.get(`click_count_three`);
    click_count_three = JSON.parse(click_count_string_three);
}


let body = document.querySelector(`body`);
body.insertAdjacentHTML(`afterbegin`, `<h1>${click_count_three}</h1>`);
body.insertAdjacentHTML(`afterbegin`, `<h1>${click_count_two}</h1>`);
body.insertAdjacentHTML(`afterbegin`, `<h1>${click_count_one}</h1>`);