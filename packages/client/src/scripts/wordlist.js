let wordlist = {
    en: {
        login: {
            login_title: "Login",
            login_form_username: "Username",
            login_form_password: "Password",
            login_form_submit: "Submit"
        },
        register: {
            register_title: "Register",
            register_form_username: "Username",
            register_form_name: "Name",
            register_form_email: "Email",
            register_form_email_example: "Exam. alexsmith@gmail.com",
            register_form_password: "Password",
            register_form_submit: "Submit"
        },
        navbar: {
            brand: "BlueSnake",
            home_link: "Home",
            about_link: "About",
            login_link: "Login",
            register_link: "Register",
            logout_link: "Logout",
            profile_link: "Profile",
            create_post_link: "Create post",
            feed_link: "Feed"
        },
        about: {
            heading: "About Us",
            about_us_text: "Blue snake is a social media network for scuba divers to share their diving adventures " +
                "and to meet new new people with same interests. " +
                "If you'd like to join, contact us and we wil allow jou to join. " +
                "This is temporary solution and we will add option to register in near future. " +
                "\n\n Contact: contact.bluesnake@gmail.com"

        },
        feed: {
            feed_title: "Feed",
            no_feed_posts: "There is nothing..",
            dive_depth: "Dive Depth",
            dive_time: "Dive Time"
        }
    }
}

let lang = "en";

let selectedWordlist;

switch (lang) {
    case "en": selectedWordlist = wordlist.en;
}

export let getSelectedWordlist = () => {
    return selectedWordlist;
}