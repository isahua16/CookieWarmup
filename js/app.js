function click_button(event)
{
    if(event[`currentTarget`].getAttribute(`game`) === `one`)
    {
        click_count_one = click_count_one + 1;
        click_count_string_one = JSON.stringify(click_count_one);
        Cookies.set(`click_count_one`, click_count_one);
    }
    else if (event[`currentTarget`].getAttribute(`game`) === `two`)
    {
        click_count_two = click_count_two + 1;
        click_count_string_two = JSON.stringify(click_count_two);
        Cookies.set(`click_count_two`, click_count_two);
    }
    else if (event[`currentTarget`].getAttribute(`game`) === `three`)
    {
        click_count_three = click_count_three + 1;
        click_count_string_three = JSON.stringify(click_count_three);
        Cookies.set(`click_count_three`, click_count_three);
    }
}

function reset_counter(event)
{
    Cookies.remove(`click_count_one`);
    Cookies.remove(`click_count_two`);
    Cookies.remove(`click_count_three`);
}

let click_count_one = 0;
let click_count_two = 0;
let click_count_three = 0;
let = click_count_string_one = ``;
let = click_count_string_two = ``;
let = click_count_string_three = ``;

if(Cookies.get(`click_count_one`) !== undefined)
{
    click_count_one = JSON.parse(Cookies.get(`click_count_one`));
}
else
{
    click_count_string_one = JSON.stringify(click_count_one);
    Cookies.set(`click_count_one`, click_count_string_one);
}

if(Cookies.get(`click_count_two`) !== undefined)
{
    click_count_two = JSON.parse(Cookies.get(`click_count_two`));
}
else
{
    click_count_string_two = JSON.stringify(click_count_two);
    Cookies.set(`click_count_two`, click_count_string_two);
}

if(Cookies.get(`click_count_three`) !== undefined)
{
    click_count_three = JSON.parse(Cookies.get(`click_count_three`));
}
else
{
    click_count_string_three = JSON.stringify(click_count_three);
    Cookies.set(`click_count_three`, click_count_string_three);
}

let btns = document.querySelectorAll(`.btn`);
for (let i = 0; i < btns.length; i++)
{
    btns[i].addEventListener(`click`, click_button);
}

let restart = document.querySelector(`#restart`);
restart.addEventListener(`click`, reset_counter);
